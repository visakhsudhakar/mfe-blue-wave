import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    //OrderRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderComponent
      }
    ])
  ]
})
export class OrderModule { }
