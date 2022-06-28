import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConciertoHomePageRoutingModule } from './concierto-home-routing.module';

import { ConciertoHomePage } from './concierto-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConciertoHomePageRoutingModule
  ],
  declarations: [ConciertoHomePage]
})
export class ConciertoHomePageModule {}
