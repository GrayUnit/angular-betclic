import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';



@NgModule({
  declarations: [IconMenuComponent, IconDeleteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconMenuComponent, IconDeleteComponent]
})
export class IconsModule { }
