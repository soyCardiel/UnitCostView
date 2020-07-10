import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiserveruri = environment.apiurl;

  constructor(
    private _http: HttpClient
  ) { }

  get<T>(endpoint: string, params: any = undefined): Observable<T>{
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.apiserveruri + endpoint, { headers }).pipe( map( (res: T) => { return res; } ) );
  }

  post<T>(endpoint: string, params: any): Observable<T> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.post(this.apiserveruri + endpoint, params, { headers }).pipe( map( (res: T) => { return res; } ) );
  }

}
