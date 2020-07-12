import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkspaceComponent } from './workspace.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectConfigurationComponent } from './components/project-configuration/project-configuration.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'projectconfiguration', component: ProjectConfigurationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
