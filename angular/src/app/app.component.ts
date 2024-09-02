import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponetsComponent } from './componets/componets.component';
import { UpperCasePipe } from '@angular/common';
import { HeaderComponet } from './header/header.component';
import { UserComponent } from './user/user.component';
import { number, name } from '../assets/code.js';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponetsComponent, HeaderComponet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular complete guide';
  constructor() {
    console.log(number);
    console.log(name());
  }
}
