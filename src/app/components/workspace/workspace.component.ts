import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';
import { IBasicProject } from 'src/app/interfaces/projects/IBasicProject';
import { Router, RouterOutlet } from '@angular/router';
import { SessionStorageService } from 'src/app/services/session-storage/session-storage.service';
import { fader } from 'src/app/helpers/route-animations';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
  animations: [fader]
})
export class WorkspaceComponent implements OnInit {

  selectedProject: IBasicProject;
  title: string;

  isDrawerOpen = false;

  buttonOptions = {
    icon: 'menu',
    onClick: () => {
      this.isDrawerOpen = !this.isDrawerOpen;
    }
  };

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private sessionStorageService: SessionStorageService
  ) {
    this.controllingInit();
  }

  ngOnInit(): void {
  }

  controllingInit(): void {

    const project = this.projectService.getCurrentProject();

    if (!project) {
      const projectfromSesson = this.sessionStorageService.get<IBasicProject>('currentProject');
      if (!projectfromSesson) {
        this.goBack();
        return;
      } else {
        this.saveMemory(projectfromSesson);
      }
    } else {
      this.saveMemory(project);
    }

  }

  saveMemory(project: IBasicProject): void {
    this.title = project.name;
    this.selectedProject = project;
    this.sessionStorageService.set('currentProject', project);
  }

  goBack(): void {
    this.router.navigate(['projects']);
  }

  loadView(e): void {
    this.router.navigate([e.addedItems[0].filePath]);
    this.isDrawerOpen = false;
  }


}
