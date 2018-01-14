import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAuthService } from './auth.interface';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthService implements IAuthService {

  constructor(
    private _http: HttpClient
  ) { }

  login(email: string, password: string): Observable<any> {
    return this._http.post("http://localhost:9000/api/auth", null, {
      params: {
        access_token: "masterkey"
      },
      headers: {
        "Authorization": "Basic " + btoa(email + ":" + password)
      }
    });
  }

  register(user: UserModel): Observable<any> {
    throw new Error("Method not implemented.");
  }
}
