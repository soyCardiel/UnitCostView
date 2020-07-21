import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiserveruri = environment.apiurl;

  constructor(
    private http: HttpClient
  ) { }

  get<T>(endpoint: string): Observable<T>{
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.apiserveruri + endpoint, { headers }).pipe( map( (res: T) => res  ) );
  }

  post<T>(endpoint: string, params: any): Observable<T> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post(this.apiserveruri + endpoint, params, { headers }).pipe( map( (res: T) => res) );
  }

}
