import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstantPageRoutingModule } from './constant-routing.module';

import { ConstantPage } from './constant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstantPageRoutingModule
  ],
  declarations: [ConstantPage]
})
export class ConstantPageModule {}
