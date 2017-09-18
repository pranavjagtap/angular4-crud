import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	/*
		Take array of users, both the ways are corrcet.
		users: User[] = [];
		users: Array<User> = [];
		We will take second way which is similar pattern used by other languages.
	*/
	/*
		Lets skip http call which is not working for now since we dont have backend ready for now.
		so will hardcode the expexted http response to the users array directly for completing the frontend first. 
	*/
	users: Array<User> = [
		new User(1, "first name", "last name", "email@gmail.com"),
		new User(2, "first name", "last name", "email@gmail.com"),
		new User(3, "first name", "last name", "email@gmail.com"),
	];

  constructor(private _userService: UserService) { }

  ngOnInit() {
	// As soon as component initializes, we will call the getUsers function.
	// this.getUsers();
  }


  destroy(user: User){
	const i = this.users.indexOf(user);
	this.users.splice(i, 1);
  }

  create(user: User) {
  	this.users.push(user);
  }

  // any because its an object
  update(users: any) {
	// console.log(users);
	const i = this.users.indexOf(users.original);
	this.users[i] = users.edited;
  }

  getUsers() {
	// this._userService.getUsers()
	// .then(users => this.users = users)
  }

}
