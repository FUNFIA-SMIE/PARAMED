import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditConstantPageRoutingModule } from './edit-constant-routing.module';

import { EditConstantPage } from './edit-constant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditConstantPageRoutingModule
  ],
  declarations: [EditConstantPage]
})
export class EditConstantPageModule {}
