import { Component } from '@angular/core';
import { Blogs } from '../../Core/Interfaces/blog';
import { SharedModuelModule } from '../../shared/shared-moduel/shared-moduel.module';
import { ArabicMonthPipePipe } from '../../Core/Pipes/arabic-month-pipe.pipe';
import { DayOnlyPipePipe } from '../../Core/Pipes/day-only-pipe.pipe';
import { TruncatePipe } from '../../Core/Pipes/truncate.pipe';
import { YearOnlyPipe } from '../../Core/Pipes/year-only.pipe';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SharedModuelModule,ArabicMonthPipePipe,DayOnlyPipePipe,TruncatePipe,YearOnlyPipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
blogs:Blogs[] = [
  {
    id : 1,
    image: "/images/blog/01.png",
    title: "أفضل حزمة برامج ERP متكاملة في نظام ALL In One الجديد",
    date : "2024-09-28T00:00:00",
    category : "الاخبار",
    content:"منذ انطلاقتها في عام 2004م كانت ومازالت شركة مجال الرائدة في منطقة الشرق الأوسط في سعي دؤوب...",
  },
  {
    id : 2,
    image: "/images/blog/02.png",
    title: "أفضل حزمة برامج ERP متكاملة في نظام ALL In One الجديد",
    date : "2024-08-03T00:00:00",
    category : "الاخبار",
    content:"منذ انطلاقتها في عام 2004م كانت ومازالت شركة مجال الرائدة في منطقة الشرق الأوسط في سعي دؤوب...",
  },
  {
    id : 3,
    image: "/images/blog/03.png",
    title: "أفضل حزمة برامج ERP متكاملة في نظام ALL In One الجديد",
    date : "2024-06-26T00:00:00",
    category : "المتاجر الالكترونية",
    content:"منذ انطلاقتها في عام 2004م كانت ومازالت شركة مجال الرائدة في منطقة الشرق الأوسط في سعي دؤوب...",
  },
  {
    id : 4,
    image: "/images/blog/04.png",
    title: "أفضل حزمة برامج ERP متكاملة في نظام ALL In One الجديد",
    date : "2024-06-14T00:00:00",
    category : "الاخبار",
    content:"منذ انطلاقتها في عام 2004م كانت ومازالت شركة مجال الرائدة في منطقة الشرق الأوسط في سعي دؤوب...",
  },
  {
    id : 5,
    image: "/images/blog/05.png",
    title: "أفضل حزمة برامج ERP متكاملة في نظام ALL In One الجديد",
    date : "2024-05-22T00:00:00",
    category : "الذكاء الاصطناعي",
    content:"منذ انطلاقتها في عام 2004م كانت ومازالت شركة مجال الرائدة في منطقة الشرق الأوسط في سعي دؤوب...",
  },
  {
    id : 6,
    image: "/images/blog/06.png",
    title: "أفضل حزمة برامج ERP متكاملة في نظام ALL In One الجديد",
    date : "2024-04-13T00:00:00",
    category : "الاخبار",
    content:"منذ انطلاقتها في عام 2004م كانت ومازالت شركة مجال الرائدة في منطقة الشرق الأوسط في سعي دؤوب...",
  },
  {
    id : 7,
    image: "/images/blog/07.png",
    title: "أفضل حزمة برامج ERP متكاملة في نظام ALL In One الجديد",
    date : "2024-03-05T00:00:00",
    category : "انظمة المعلومات",
    content:"منذ انطلاقتها في عام 2004م كانت ومازالت شركة مجال الرائدة في منطقة الشرق الأوسط في سعي دؤوب...",
  },
  {
    id : 8,
    image: "/images/blog/08.png",
    title: "أفضل حزمة برامج ERP متكاملة في نظام ALL In One الجديد",
    date : "2024-02-02T00:00:00",
    category : "انظمة المعلومات",
    content:"منذ انطلاقتها في عام 2004م كانت ومازالت شركة مجال الرائدة في منطقة الشرق الأوسط في سعي دؤوب...",
  },
]
filteredBlogs = this.blogs; // Initially, all blogs will be displayed
  uniqueCategories: string[] = [];
  selectedCategory: string = 'all';
  constructor() {
    // Get unique categories from the blogs
    this.uniqueCategories = [...new Set(this.blogs.map(blog => blog.category))];
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'all') {
      this.filteredBlogs = this.blogs; // Show all blogs
    } else {
      this.filteredBlogs = this.blogs.filter(blog => blog.category === category);
    }
  }

  // Track by function to improve performance
  trackByBlogId(index: number, blog: any): number {
    return blog.id;
  }
}
