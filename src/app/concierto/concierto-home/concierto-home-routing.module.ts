import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConciertoHomePage } from './concierto-home.page';

const routes: Routes = [
  {
    path: '',
    component: ConciertoHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConciertoHomePageRoutingModule {}
