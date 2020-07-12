import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { CustomRoutingStrategy } from 'src/app/commons/custom-routing-strategy';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'projects', loadChildren: () => import('./modules/pages/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'workspace', loadChildren: () => import('./modules/pages/workspace/workspace.module').then(m => m.WorkspaceModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomRoutingStrategy
  }]
})
export class AppRoutingModule { }
