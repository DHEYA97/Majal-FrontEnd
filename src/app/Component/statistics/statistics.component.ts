import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
// Define an interface for the item
interface StatisticsItem {
  icon: string; // Font Awesome icon class
  counter: number; // Initial counter value
  name: string; // Text for the h5 tag
  currentValue?: number; // To hold the current value of the counter
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit, AfterViewInit {

  @ViewChildren('statisticItem') statisticItems!: QueryList<ElementRef>;

  // Array of items with 'icon', 'counter', 'name', and optional 'currentValue'
  items: StatisticsItem[] = [
    { icon: 'fa-regular fa-calendar-days', counter: 19, name: 'سنة خبرة' },
    { icon: 'fa-solid fa-laptop-file', counter: 8, name: 'مشاريع تقنية' },
    { icon: 'fa-solid fa-user-check', counter: 300, name: 'عملاء' },
    { icon: 'fa-solid fa-headset', counter: 40, name: 'مختص' }
  ];

  private hasStarted: boolean[] = [];

  constructor() {}

  ngOnInit(): void {
    // Initialize currentValues for each item
    this.items.forEach(item => {
      item.currentValue = 0; // Initialize the current value
    });
  }

  ngAfterViewInit(): void {
    this.hasStarted = Array(this.items.length).fill(false);
    window.addEventListener('scroll', () => this.checkVisibility());
    // Initial check in case sections are already in view on page load
    this.checkVisibility();
  }

  // Function to check if an element is in view
  checkVisibility(): void {
    this.statisticItems.forEach((item, index) => {
      const element = item.nativeElement as HTMLElement;
      if (this.isInViewport(element) && !this.hasStarted[index]) {
        this.startCounter(this.items[index]);
        this.hasStarted[index] = true; // Prevent restarting the counter
      }
    });
  }

  // Helper function to determine if an element is in the viewport
  isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to increment the counter
  startCounter(item: StatisticsItem): void {
    const end = item.counter;
    let start = 0;
    const increment = Math.ceil(end / 100);

    const interval = setInterval(() => {
      if (start < end) {
        start += increment;
        item.currentValue = Math.min(start, end); // Ensure the value doesn't exceed 'end'
      } else {
        item.currentValue = end; // Ensure final value is exactly 'end'
        clearInterval(interval);
      }
    }, 70);
  }
}