import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { CardMaskPipe } from '../../pipes/card-mask.pipe';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent, CardMaskPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display card holder name', () => {
    component.cardData = {
      ...component.cardData,
      cardHolderName: 'Test Name',
    };
    fixture.detectChanges();
    const cardHolderNameElement =
      fixture.nativeElement.querySelector('.card-holder-name');
    expect(cardHolderNameElement.textContent).toContain('Test Name');
  });

  it('should display card number', () => {
    component.cardData = {
      ...component.cardData,
    };
    fixture.detectChanges();
    const cardHolderNameElement =
      fixture.nativeElement.querySelector('.card-number');
    expect(cardHolderNameElement.textContent).toContain(
      '1234  5678  1234  5678'
    );
  });

  it('should display CVV', () => {
    component.cardData = {
      ...component.cardData,
    };
    fixture.detectChanges();
    const cardHolderNameElement =
      fixture.nativeElement.querySelector('.card-cvv');
    expect(cardHolderNameElement.textContent).toContain('123');
  });

  it('should hide card number', () => {
    component.cardData = {
      ...component.cardData,
      isHideInfo: true,
    };
    fixture.detectChanges();
    const cardHolderNameElement =
      fixture.nativeElement.querySelector('.card-number');
    expect(cardHolderNameElement.textContent).toContain(
      '••••  ••••  ••••  5678'
    );
  });

  it('should hide CVV', () => {
    component.cardData = {
      ...component.cardData,
      isHideInfo: true,
    };
    fixture.detectChanges();
    const cardHolderNameElement =
      fixture.nativeElement.querySelector('.card-cvv');
    expect(cardHolderNameElement.textContent).toContain('***');
  });
});
