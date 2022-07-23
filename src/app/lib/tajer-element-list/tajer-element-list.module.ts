import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TajerElementListComponent } from './feature/tajer-element-list.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { TajerElementListService } from './data-access/tajer-element-list.service';

@NgModule({
  declarations: [TajerElementListComponent],
  imports: [CommonModule, SharedModule, IonicModule],
  exports: [TajerElementListComponent],
})
export class TajerElementListModule {}
