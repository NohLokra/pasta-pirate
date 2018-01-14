import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = "admin@pirate.com";
  password: string = "password";
  error: boolean = false;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.error = false;

    this._authService.login(this.email.toLowerCase(), this.password).subscribe(data => {
      this.error = false;
      localStorage.setItem("access_token", data.token);

      this._router.navigate(['/']);
    }, (err) => {
      this.error = true;
      console.error("Raté");
    });
  }

}
