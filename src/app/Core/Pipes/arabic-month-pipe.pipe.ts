import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arabicMonthPipe',
  standalone: true
})
export class ArabicMonthPipePipe implements PipeTransform {
  private months: string[] = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];

  transform(value: string): string {
    const date = new Date(value); // Convert string to Date object
    const monthIndex = date.getMonth(); // Extract month (0-11)
    return this.months[monthIndex]; // Return Arabic month name
  }
}
