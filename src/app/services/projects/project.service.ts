import { Injectable } from '@angular/core';
import { HttpService } from '../http-client/http.service';
import { IBasicProject } from 'src/app/interfaces/projects/IBasicProject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private apiClient: HttpService) { }

  private currentSelectedProject: IBasicProject;

  getBasicProjectList(): Observable<IBasicProject[]> {
    return this.apiClient.get<IBasicProject[]>('Project/GetBasicProjects');
  }

  createBasicProject(model: IBasicProject): Observable<IBasicProject> {
    return this.apiClient.post<IBasicProject>('Project/CreateBasicProject', model);
  }

  getCurrentProject(): IBasicProject {
    return this.currentSelectedProject;
  }

  setCurrentProject(model: IBasicProject): void {
    this.currentSelectedProject = model;
  }
}
