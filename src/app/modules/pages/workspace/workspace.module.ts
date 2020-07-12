import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { GeneralModule } from '../../general/general.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectConfigurationComponent } from './components/project-configuration/project-configuration.component';
import {
  DxTabPanelModule,
  DxTemplateModule,

 } from 'devextreme-angular';



@NgModule({
  declarations: [WorkspaceComponent, DashboardComponent, ProjectConfigurationComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    GeneralModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    DxTabPanelModule
  ],
  providers: [
  ]
})
export class WorkspaceModule { }
