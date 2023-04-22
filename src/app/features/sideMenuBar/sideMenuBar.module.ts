import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuBarComponent } from './sideMenuBar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SideMenuBarComponent],
  exports: [SideMenuBarComponent]
})
export class SideMenuBarModule { }
