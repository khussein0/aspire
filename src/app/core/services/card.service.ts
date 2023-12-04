import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { CardType } from '../models/card';

const MOCK_DATA = [
  {
    id: uuidv4(),
    cardHolderName: 'Khaled Hussein',
    cardNumber: '1234567812345678',
    expirationDate: '12/25',
    cvvNumber: 123,
    isHideInfo: false,
    isFrozen: false,
  },
  {
    id: uuidv4(),
    cardHolderName: 'Halima Shakila',
    cardNumber: '1234123412341234',
    expirationDate: '01/28',
    cvvNumber: 456,
    isHideInfo: true,
    isFrozen: false,
  },
  {
    id: uuidv4(),
    cardHolderName: 'Nitin Faisal',
    cardNumber: '1234567812345678',
    expirationDate: '09/30',
    cvvNumber: 789,
    isHideInfo: true,
    isFrozen: true,
  },
];

@Injectable({
  providedIn: 'root',
})
export class CardService {
  public readonly cardList$: Observable<CardType[]>;

  private readonly _cardList$: BehaviorSubject<CardType[]>;

  public constructor() {
    this._cardList$ = new BehaviorSubject<CardType[]>(MOCK_DATA);
    this.cardList$ = this._cardList$.asObservable();
  }

  public removeCard(index: number): void {
    const newList = this._cardList$.getValue().filter((item, i) => i !== index);
    this._cardList$.next(newList);
  }

  public toggleCard(index: number): void {
    const listCard = this._cardList$.getValue();
    listCard[index].isHideInfo = !listCard[index].isHideInfo;
    this._cardList$.next(listCard);
  }

  public toggleFreezing(index: number): void {
    const listCard = this._cardList$.getValue();
    listCard[index].isFrozen = !listCard[index].isFrozen;
    this._cardList$.next(listCard);
  }

  public isCardFrozen(index: number): boolean {
    const listCard = this._cardList$.getValue();
    return listCard[index].isFrozen;
  }

  public generateCard(cardHolderName: string): void {
    const currentList = this._cardList$.getValue();
    const newItem = {
      id: uuidv4(),
      cardHolderName: cardHolderName,
      cardNumber: this.generateRandomNumber(),
      expirationDate: '12/24',
      cvvNumber: this.randomRange(100, 999),
      isHideInfo: false,
      isFrozen: false,
    };
    this._cardList$.next([...currentList, newItem]);
  }

  private generateRandomNumber(): string {
    let result = '';
    for (let i = 0; i < 16; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }

  private randomRange(min: number, max: number): number {
    var randVal = min + Math.random() * (max - min);
    return Math.round(randVal);
  }
}