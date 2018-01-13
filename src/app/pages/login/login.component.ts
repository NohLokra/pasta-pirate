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

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.email, this.password).subscribe(data => {
      this._router.navigate(['/']);
    }, (err) => {
      console.log("Raté");
    });
  }

}
