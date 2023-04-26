import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getData(key: any) {
    return window.localStorage.getItem(key);
  }

  setdata(data: any) {
    window.localStorage.setItem(data.key, data.value);
  }

  checkUserhasLikedOrNotFromLocalStorage() {
  }
}
