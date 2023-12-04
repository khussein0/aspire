import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { StylesModule } from '../../../styles/styles.module';
import { SharedModule } from '../../shared.module';
import { CardCreationDialogComponent } from './card-creation-dialog.component';

describe('CardCreationDialogComponent', () => {
  let component: CardCreationDialogComponent;
  let fixture: ComponentFixture<CardCreationDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardCreationDialogComponent],
      imports: [SharedModule, StylesModule],
      providers: [DialogService, DynamicDialogRef],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
