import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountFormat',
})
export class AmountFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    } else {
      return value.toString();
    }
  }
}
