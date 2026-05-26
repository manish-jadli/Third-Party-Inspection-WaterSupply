import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../components/auth/header/header.component';
import { FooterComponent } from '../../../components/auth/footer/footer.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {

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