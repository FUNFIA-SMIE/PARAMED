import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstantPage } from './constant.page';

const routes: Routes = [
  {
    path: '',
    component: ConstantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstantPageRoutingModule {}
