import { Component, OnInit } from '@angular/core';
import { IBasicProject } from 'src/app/interfaces/projects/IBasicProject';
import { ProjectService } from 'src/app/services/projects/project.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicProjectFormComponent } from './components/basic-project-form/basic-project-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [] as IBasicProject[];

  constructor(
    private projectsService: ProjectService,
    public modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectsService.getBasicProjectList().subscribe( res => {
      this.projects = res;
    });
  }

  openProjectModal(): void {
    const formcompref = this.modalService.open(BasicProjectFormComponent, {keyboard: false, backdrop: 'static', size: 'lg'});
    formcompref.result.then( formresult => {
      const basicProjectModel = formresult as IBasicProject;
      this.projectsService.createBasicProject(basicProjectModel).subscribe( created => {
        this.projects.push(created);
      });
    } , error =>{
      console.log(error);
    });

  }

  onRowSelected(model: IBasicProject): void {
    this.projectsService.setCurrentProject(model);
    this.router.navigate(['/workspace/dashboard']);
  }


}
