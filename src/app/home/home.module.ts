import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TajerNavbarModule } from '../lib/tajer-navbar/tajer-navbar.module';
import { TajerElementListModule } from '../lib/tajer-element-list/tajer-element-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TajerNavbarModule,
    TajerElementListModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
