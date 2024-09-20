import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface SYstemItem {
  id :number;
  image: string;
  title: string;
}
@Component({
  selector: 'app-system',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss'
})
export class SystemComponent {
  items: SYstemItem[] = [
    { id: 1, image: '/images/logo-.png', title: 'نظام ALL In One' },
    { id: 2, image: '/images/logo-.png', title: 'نظام الموارد البشرية' },
    { id: 3, image: '/images/logo-.png', title: "نظام المتاجر الالكترونية" },
    { id: 4, image: '/images/logo-.png', title: 'نظام Trust Pro' },
  ];
}
