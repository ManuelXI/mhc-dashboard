import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountFormat',
})
export class AmountFormatPipe implements PipeTransform {
  transform(value: number, decimals: number = 1): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(decimals) + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(decimals) + 'K';
    } else {
      return value.toFixed(decimals);
    }
  }
}
