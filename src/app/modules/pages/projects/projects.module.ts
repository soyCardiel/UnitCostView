import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { GeneralModule } from '../../general/general.module';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from 'src/app/services/project/project.service';
import { HttpService } from 'src/app/services/http.service';


@NgModule({
  declarations: [
    ProjectsComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    GeneralModule,
    HttpClientModule,
  ],
  providers: [
    ProjectService,
    HttpService
  ]
})
export class ProjectsModule { }
