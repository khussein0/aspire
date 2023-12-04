import { TestBed, inject } from '@angular/core/testing';
import { CardService } from './card.service';

describe('Service: Card', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService]
    });
  });

  it('should ...', inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy();
  }));
});