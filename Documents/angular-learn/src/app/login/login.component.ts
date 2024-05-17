import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthInterface } from '../auth-interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  Form: FormGroup;
  loginMode: boolean = true;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onModeSwitch() {
    this.loginMode = !this.loginMode;
  }

  onSubmit() {
    if (this.Form.valid) {
      console.log(this.Form.value);
      const email = this.Form.value.email;
      const password = this.Form.value.password;
      let authObserable: Observable<AuthInterface>;
      if (this.loginMode) {
        authObserable = this.auth.signIn(email, password);
      } else {
        authObserable = this.auth.signUp(email, password);
      }
      authObserable.subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      // ....
    }
  }
}
