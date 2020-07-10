import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { IBasicProject } from 'src/app/interfaces/projects/IBasicProject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _apiClient: HttpService) { }

  getBasicProjectList(): Observable<IBasicProject[]> {
    return this._apiClient.get('Project/GetBasicProjects');
  }
}
