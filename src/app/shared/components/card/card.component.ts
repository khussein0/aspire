import { Component, Input } from '@angular/core';
import { CardType } from '../../../core/models/card';

const DEFAULT_CARD: CardType = {
  id: '',
  cardHolderName: 'Name On Card',
  cardNumber: '1234567812345678',
  expirationDate: '12/34',
  cvvNumber: 123,
  isHideInfo: false,
  isFrozen: false,
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public cardData: CardType = DEFAULT_CARD;
}
