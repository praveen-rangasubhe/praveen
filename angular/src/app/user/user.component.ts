import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectedUser: any;

  constructor() {
    this.selectedUser = DUMMY_USERS;
    console.log(this.selectedUser);
  }
}
