import { Component, HostListener, OnInit } from '@angular/core';
import { SharedModuelModule } from '../../shared/shared-moduel/shared-moduel.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SharedModuelModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  activeSection: string = 'home';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Subscribe to fragment changes
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }
  setActiveSection(section: string) {
    this.activeSection = section;
    setTimeout(() => {
      this.scrollToSection(section);
    }, 50);  // تأخير بسيط للتأكد من أن الصفحة انتقلت إلى المكان الصحيح
}

  private scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      const extraOffset = 75; // Adjust this value as needed
      window.scrollTo({
        top: offsetTop - extraOffset,
        behavior: 'smooth',
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'services', 'systems', 'client', 'contact-us'];
    const extraOffset = 100; // زيادة الإزاحة لضبط التنشيط في الوقت المناسب

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const topPositionWithOffset = rect.top - extraOffset;

        // تحديث activeSection فقط عندما يكون الجزء العلوي من القسم أقرب لأعلى الشاشة
        if (topPositionWithOffset <= 0 && rect.bottom > extraOffset) {
          this.activeSection = sectionId;
        }
      }
    });
  }
}
