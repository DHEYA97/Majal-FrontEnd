import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayOnlyPipe',
  standalone: true
})
export class DayOnlyPipePipe implements PipeTransform {
  transform(value: string): number {
    const date = new Date(value); // Convert string to Date object
    return date.getDate(); // Extract and return the day
  }

}
