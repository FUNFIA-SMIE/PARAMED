import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientAttentePage } from './patient-attente.page';

const routes: Routes = [
  {
    path: '',
    component: PatientAttentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientAttentePageRoutingModule {}
