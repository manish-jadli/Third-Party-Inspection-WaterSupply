import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginData: any = {
    Email: '',
    PasswordHash: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  login() {

    this.authService
      .login(this.loginData)
      .subscribe((response: any) => {

        localStorage.setItem(
          'token',
          response.token
        );
        console.log(localStorage.getItem('token'))

        localStorage.setItem(
          'userRole',
          response.user.role
        );

        localStorage.setItem(
          'username',
          response.user.username
        );
        

        this.router.navigate(['/dashboard']);

      });

  }

}