import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FigurineColorComponent } from './figurine-color/figurine-color.components';



@NgModule({
  declarations: [
    FigurineColorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FigurineColorComponent
  ]
})
export class SharedModule { }