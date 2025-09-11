import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditConstantPage } from './edit-constant.page';

const routes: Routes = [
  {
    path: '',
    component: EditConstantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditConstantPageRoutingModule {}
