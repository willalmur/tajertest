import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationalPageRoutingModule } from './informational-routing.module';

import { InformationalPage } from './informational.page';
import { TajerNavbarModule } from '../lib/tajer-navbar/tajer-navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationalPageRoutingModule,
    TajerNavbarModule,
  ],
  declarations: [InformationalPage],
})
export class InformationalPageModule {}
