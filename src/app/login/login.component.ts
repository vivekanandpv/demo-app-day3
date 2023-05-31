import { Component } from '@angular/core';

interface LoginViewModel {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: LoginViewModel = {
    username: '',
    password: '',
  };

  onSubmit() {
    console.log(this.login);
  }
}
