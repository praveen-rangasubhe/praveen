import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login-routing.module').then((m) => m.LoginRoutingModule),
  },
  {
    path: 'lifehooks',
    loadChildren: () =>
      import('./life-hook/life-hook-routing.module').then(
        (m) => m.LifeHookRoutingModule
      ),
  },
  {
    path: 'routing',
    loadChildren: () =>
      import('./routing/routing-routing.module').then(
        (m) => m.RoutingRoutingModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
  },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
