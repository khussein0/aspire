import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StylesModule } from '../styles/styles.module';
import { CardCreationDialogComponent } from './components/card-creation-dialog/card-creation-dialog.component';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { CardMaskPipe } from './pipes/card-mask.pipe';

const SHARED_COMPONENTS = [
  CardComponent,
  NavigationComponent,
  SideNavigationComponent,
  TransactionListComponent,
  CardCreationDialogComponent,
  CardMaskPipe,
];
@NgModule({
  imports: [CommonModule, FormsModule, StylesModule],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
})
export class SharedModule {}