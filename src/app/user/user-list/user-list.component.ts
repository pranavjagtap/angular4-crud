import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  /*
  	Input usres to this user-list component
   	So parent can pass data to users property of user-list.
   	And any change in parent component to users list will get reflected to user-list i.e. this component.
   */
  @Input() users;
  // Output the destroyUserEvent and will emit some data to the parent componnet through whihc this event gets triggered.  
  @Output() destroyUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  destroy(user: User) {
    // pass the user which we want to destroy
    this.destroyUserEvent.emit(user);
  }

  update(users){
    // orignal user nad update dverison ofusre will be emitted from here
    this.updateUserEvent.emit(users);
  }
}
