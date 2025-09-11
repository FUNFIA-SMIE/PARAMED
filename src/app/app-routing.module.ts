import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'patient-attente',
    loadChildren: () => import('./pages/patient-attente/patient-attente.module').then( m => m.PatientAttentePageModule)
  },
  {
    path: 'patient-pec',
    loadChildren: () => import('./pages/patient-pec/patient-pec.module').then( m => m.PatientPecPageModule)
  },

  {
    path: 'constant',
    loadChildren: () => import('./pages/constant/constant.module').then( m => m.ConstantPageModule)
  },
  {
    path: 'edit-constant',
    loadChildren: () => import('./edit-constant/edit-constant.module').then( m => m.EditConstantPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
