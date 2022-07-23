import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TajerNavbarComponent } from './feature/tajer-navbar.component';
import { IonicModule } from '@ionic/angular';
import { TajerNavbarService } from './data-access/tajer-navbar.service';

@NgModule({
  declarations: [TajerNavbarComponent],
  imports: [CommonModule, SharedModule, IonicModule],
  providers: [TajerNavbarService],
  exports: [TajerNavbarComponent],
})
export class TajerNavbarModule {}
