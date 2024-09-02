import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponet {
  selectedUser: {}[];
  constructor() {
    this.selectedUser = DUMMY_USERS;
  }
}
