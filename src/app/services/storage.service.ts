import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  }
  get(key){
    return JSON.parse(localStorage.getItem(key));
  }
  remove(key){
    localStorage.removeItem(key);
  }
}
