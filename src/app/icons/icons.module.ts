import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconMenuComponent } from './icon-menu/icon-menu.component';



@NgModule({
  declarations: [IconMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [IconsModule]
})
export class IconsModule { }
