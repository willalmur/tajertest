import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationalPage } from './informational.page';

const routes: Routes = [
  {
    path: '',
    component: InformationalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationalPageRoutingModule {}
