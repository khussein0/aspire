import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutes } from './features.routing';
import { StylesModule } from '../styles/styles.module';
import { CardListComponent } from './card-list/card-list.component';
import { FeaturesComponent } from './features.component';

@NgModule({
  imports: [CommonModule, FeaturesRoutes, SharedModule, StylesModule],
  declarations: [CardListComponent, FeaturesComponent],
  providers: [],
})
export class FeaturesModule {}
