import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
      headers: {
        "Authorization": "Basic " + btoa(email + ":" + password)
      }
    });
  }

  register(user: UserModel): Observable<any> {
    throw new Error("Method not implemented.");
    // let params = new HttpParams();
    // for ( var index in user ) {
    //   console.log(user[index]);
    // }
    //
    // return this._http.post("http://localhost:9000/api/users", null, {
    //   params: user
    // });
  }
}
