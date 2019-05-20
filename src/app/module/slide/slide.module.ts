import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide.component';

@NgModule({
  declarations: [SlideComponent],
  imports: [
    CommonModule
  ],
  exports:[SlideComponent]
})
export class SlideModule { }
