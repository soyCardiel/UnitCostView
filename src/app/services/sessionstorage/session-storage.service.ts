import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  get<T>(key: string): T {
    let result = undefined as T;
    const value = sessionStorage.getItem(key);
    if (value) {
      const saved = JSON.parse(value);
      result = saved[key] as T;
    }

    return result;
  }

  set(key: string, value: any): void {
    const saving = {};
    saving[key] = value;
    const forMemory = JSON.stringify( saving );
    sessionStorage.setItem(key, forMemory);
  }

}
