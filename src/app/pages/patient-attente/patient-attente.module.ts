import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientAttentePageRoutingModule } from './patient-attente-routing.module';

import { PatientAttentePage } from './patient-attente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientAttentePageRoutingModule
  ],
  declarations: [PatientAttentePage]
})
export class PatientAttentePageModule {}
