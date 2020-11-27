import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [UiComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports: [UiComponent]
})
export class UiModule { }
