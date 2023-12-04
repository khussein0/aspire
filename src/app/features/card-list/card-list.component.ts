import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CarouselPageEvent } from 'primeng/carousel';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, ReplaySubject, of, takeUntil, tap } from 'rxjs';
import { CardType } from '../../core/models/card';
import { CardService } from '../../core/services/card.service';
import { CardCreationDialogComponent } from '../../shared/components/card-creation-dialog/card-creation-dialog.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [DialogService, ConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CardListComponent implements OnInit {
  public cardList$: Observable<CardType[] | null>;
  private dialogRef: DynamicDialogRef | undefined;
  protected currentIndex = -1;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  public constructor(
    private readonly dialogService: DialogService,
    private readonly confirmationService: ConfirmationService,
    private readonly cardService: CardService
  ){
    this.cardList$ = of([]);
  }

  public ngOnInit(): void {
    this.cardList$ = this.cardService.cardList$.pipe(
      tap((cardList: CardType[]) => {
        if (cardList.length > 0 && this.currentIndex < 0) {
          this.currentIndex = 0;
        }
      }),
      takeUntil(this.destroyed$)
    );
  }

  public ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  protected openCardCreationDialog(): void {
    this.dialogRef = this.dialogService.open(CardCreationDialogComponent, {
      header: 'Add new card',
      width: '400px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 1000,
      closable: true,
    });

    this.dialogRef.onClose.subscribe((cardHolderName: string) => {
      if (cardHolderName) {
        this.cardService.generateCard(cardHolderName);
      }
    });
  }

  protected currentCard(event: CarouselPageEvent) {
    if (event.page === undefined) {
      return;
    }
    this.currentIndex = event.page;
  }

  protected removeCard(): void {
    if (this.currentIndex < 0) {
      return;
    }
    this.confirmationService.confirm({
      message: 'Do you want to remove this card?',
      header: 'Confirmation',
      accept: () => {
        this.cardService.removeCard(this.currentIndex);
      },
    });
  }

  protected toggleCard(): void {
    if (this.currentIndex < 0) {
      return;
    }
    this.cardService.toggleCard(this.currentIndex);
  }

  protected toggleFreezing(): void {
    if (this.currentIndex < 0) {
      return;
    }
    this.cardService.toggleFreezing(this.currentIndex);
  }

  protected isCardFrozen(): boolean {
    return this.cardService.isCardFrozen(this.currentIndex);
  }
}
