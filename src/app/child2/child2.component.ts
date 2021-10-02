import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() childEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }


  passDatatoParent(){
   this.childEvent.emit('This is Data from Child to Parent');    
  }
  

}
