import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
	newUser = new User();
	//@Output used to output data to parent
	@Output() createNewUserEvent = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	create() {
	  // call server to save data.
	  // So whoever is calling the create function on createNewUserEvent event, it will get the newUser object in return. 
	  this.createNewUserEvent.emit(this.newUser);
	  // redefining the object to new User which wil;l basically clear the user object
	  this.newUser = new User();


  }
}
