import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BasicProjectFormComponent } from './components/basic-project-form/basic-project-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    BasicProjectFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    TopbarComponent,
    SidebarComponent
  ]
})
export class GeneralModule { }
