import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MobileComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MobileComponent]
})
export class ProductsModule { }
