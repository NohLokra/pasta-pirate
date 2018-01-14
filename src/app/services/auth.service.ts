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
    // Ici on se fait jeter si on passe de tenter directement user en paramètre. Donc on prépare le HttpParams à la main
    let params = new HttpParams();
    for ( let field in user ) {
      params.set(field, user[field]);
    }

    return this._http.post("http://localhost:9000/api/users", null, {
      params: params
    });
  }
}
