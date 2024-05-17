import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeHookComponent } from './life-hook.component';

const routes: Routes = [
  {
    path: '',
    component: LifeHookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifeHookRoutingModule {}
