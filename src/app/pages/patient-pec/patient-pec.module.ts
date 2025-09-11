import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientPecPageRoutingModule } from './patient-pec-routing.module';

import { PatientPecPage } from './patient-pec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientPecPageRoutingModule
  ],
  declarations: [PatientPecPage]
})
export class PatientPecPageModule {}
