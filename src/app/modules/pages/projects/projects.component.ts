import { Component, OnInit } from '@angular/core';
import { IBasicProject } from 'src/app/interfaces/projects/IBasicProject';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [] as IBasicProject[];

  constructor(private _projectsService: ProjectService) { }

  ngOnInit(): void {
    this._projectsService.getBasicProjectList().subscribe( res => {
      this.projects = res;
    });
  }

}
