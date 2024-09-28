import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearOnly',
  standalone: true
})
export class YearOnlyPipe implements PipeTransform {
  transform(value: Date | string): number {
    const date = new Date(value); // Convert string or Date to Date object
    return date.getFullYear(); // Extract and return the year
  }

}
