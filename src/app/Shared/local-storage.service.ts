import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getData () {
    return window.localStorage.getItem('liked');
  }

  setdata (data:any) {
    window.localStorage.setItem('liked', data);
  }

  checkUserhasLikedOrNotFromLocalStorage() {
    // console.log('Check Data: ', this.localStorageService.getData())
    // if(this.localStorageService.getData()) {
    //   this.ifClicked = true;
    // } else {
    //   this.ifClicked = false
    // }
  }
}
