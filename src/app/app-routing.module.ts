import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReportingComponent } from './reporting/reporting.component';
import { AirtimeComponent } from './airtime/airtime.component';
import { FacturierComponent } from './facturier/facturier.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'reporting',
    component:ReportingComponent
  },
  {
    path: 'airtime',
    component:AirtimeComponent
  },
  {
    path: 'facturier',
    component:FacturierComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
