import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DashboardComponent } from './components/workspace/components/dashboard/dashboard.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { CatalogsComponent } from './components/workspace/components/catalogs/catalogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'workspace', component: WorkspaceComponent, children : [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'catalogs', component: CatalogsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
