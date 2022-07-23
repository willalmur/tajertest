import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TajerCardComponent } from './ui/tajer-card.component';
import { TajerLogoComponent } from './ui/tajer-logo.component';
import { TajerSwitchButtonComponent } from './ui/tajer-switch-button.component';
import { TajerNavigationButtonComponent } from './ui/tajer-navigation-button.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TajerCardComponent,
    TajerLogoComponent,
    TajerSwitchButtonComponent,
    TajerNavigationButtonComponent,
  ],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [
    TajerCardComponent,
    TajerLogoComponent,
    TajerSwitchButtonComponent,
    TajerNavigationButtonComponent,
  ],
})
export class SharedModule {}
