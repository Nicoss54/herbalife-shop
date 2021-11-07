import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-design-system/material.module';

@NgModule({
  imports: [],
  exports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
