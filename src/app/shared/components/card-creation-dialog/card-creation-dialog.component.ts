import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-card-creation-dialog',
  templateUrl: './card-creation-dialog.component.html'
})
export class CardCreationDialogComponent implements OnInit {
  protected cardHolderName: string = '';

  protected invalidLength: boolean = false;

  protected haveSpecialCharacter: boolean = false;

  public constructor(public readonly ref: DynamicDialogRef) {}

  public ngOnInit() {}

  onSubmit(): void {
    const regex = /^[a-zA-Z0-9\s]+$/;
    const result = regex.test(this.cardHolderName);
    this.haveSpecialCharacter = !result;
    this.invalidLength =
      this.cardHolderName.length === 0 || this.cardHolderName.length > 50;

    if (this.haveSpecialCharacter || this.invalidLength) {
      return;
    }
    this.ref.close(this.cardHolderName);
  }
}
