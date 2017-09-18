import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
	@Input() user: User;
	@Output() updateUserEvent = new EventEmitter();
	// it is the edit property of user to reset or refersh the user values 
	// so we will be setting it to a new instance oos user.
	userEdit: User= new User();

	constructor() { }

	// gets called as soon as User component is initialized after constructed.
	ngOnInit() {
		// copy values of Usre to userEdit 
		Object.assign(this.userEdit, this.user);
		// console.log(this.userEdit);
	}

	update() {
		// To close edit component on submit.
		this.userEdit.editable = false;
		// update this.userEdit to this.user
		this.updateUserEvent.emit({original: this.user, edited: this.userEdit});
	}
}
