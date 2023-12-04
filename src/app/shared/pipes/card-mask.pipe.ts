import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardMask'
})

export class CardMaskPipe implements PipeTransform {
  transform(cardNumber: string, isHideInfo: boolean): string {
    if (isHideInfo) {
      return `••••  ••••  ••••  ${cardNumber.slice(-4)}`;
    }
    return cardNumber.replace(/(\d{4})/g, '$1  ').trim();
  }
}