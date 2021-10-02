import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _ht:HttpClient) { }
  private url:string=`https://jsonplaceholder.typicode.com/comments`;
  getData()
  {
   return this._ht.get(this.url); 
  }
}
