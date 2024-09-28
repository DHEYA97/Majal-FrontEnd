import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value) return '';

    const date = new Date(value);
    const hours = date.getHours();
    const minutes = this.padZero(date.getMinutes());
    const amPm = hours >= 12 ? 'م' : 'ص';
    const formattedHours = hours % 12 || 12; // Converts to 12-hour format

    return `${formattedHours}:${minutes} ${amPm}`;
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }
}
