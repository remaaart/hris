import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService) { }

    ngOnInit() {
      
    }

  onLoginClicked() {
    this.authService.login();
    this.router.navigate(['/dashboard']);
  }
}
