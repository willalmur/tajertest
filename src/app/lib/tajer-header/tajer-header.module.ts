import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { TajerHeaderComponent } from './feature/tajer-header.component';

@NgModule({
  declarations: [TajerHeaderComponent],
  imports: [CommonModule, SharedModule, IonicModule],
  exports: [TajerHeaderComponent],
})
export class TajerHeaderModule {}
