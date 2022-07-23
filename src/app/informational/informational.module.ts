import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationalPageRoutingModule } from './informational-routing.module';

import { InformationalPage } from './informational.page';
import { TajerNavbarModule } from '../lib/tajer-navbar/tajer-navbar.module';
import { TajerHeaderModule } from '../lib/tajer-header/tajer-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationalPageRoutingModule,
    TajerNavbarModule,
    TajerHeaderModule,
  ],
  declarations: [InformationalPage],
})
export class InformationalPageModule {}
