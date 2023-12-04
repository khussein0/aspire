import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

const STYLES_MODULES = [
  AccordionModule,
  CardModule,
  CarouselModule,
  ButtonModule,
  TabViewModule,
  InputTextModule,
  ConfirmDialogModule,
];

@NgModule({
  imports: [CommonModule, ...STYLES_MODULES],
  exports: [...STYLES_MODULES],
})
export class StylesModule {}
