import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientPecPage } from './patient-pec.page';

const routes: Routes = [
  {
    path: '',
    component: PatientPecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientPecPageRoutingModule {}
