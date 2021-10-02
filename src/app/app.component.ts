import { Component } from '@angular/core';
import {DataService} from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 InputOperater='This is sharing data from Parent Component to Chidl Component';
 posts:any;
 constructor(private dataService:DataService)
 {
  this.dataService.getData().subscribe((resp)=>{this.posts=resp;console.log(resp)},(err)=>{console.log(err)});
 }


 message:string='';

 getChildData(value:string)
 {
    console.log(value);
 }

 getData()
 {
  this.dataService.getData().subscribe((resp)=>{console.log(resp)},(err)=>{console.log(err)});
 }


}


