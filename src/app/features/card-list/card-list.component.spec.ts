import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardListComponent } from './card-list.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { CardMaskPipe } from '../../shared/pipes/card-mask.pipe';
import { StylesModule } from '../../styles/styles.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SharedModule } from '../../shared/shared.module';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CardListComponent, CardComponent, CardMaskPipe],
      imports: [SharedModule, StylesModule, BrowserAnimationsModule],
      providers: [DialogService, DynamicDialogRef],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});