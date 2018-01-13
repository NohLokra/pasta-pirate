import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAuthService } from './auth.interface';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/user.model';

@Injectable()
export class FakeAuthService implements IAuthService {
  
  constructor(
    private _http: HttpClient
  ) { }

  login(email: string, password: string): Observable<any> {
    if (email == "admin@pirate.com" && password == "password") {
      return new Observable(sub => {
        sub.next({
          user: {
            id: "ez54f684se8f4se4",
            email: "admin@pirate.com",
            name: "Zozo",
            role: "",
            picture: "https://fr.gravatar.com/userimage/54117211/71e8f43fa8f74c4f1e87a3aee9381f00.png"
          },
          token: "zq5d6q4zf64qzf84zq4f8z4f68zq4f68468f4q6fq46zq4f6q4"
        });
        sub.complete();
      });
    }
    
    return new Observable(sub => {
      sub.error(false);
      sub.complete();
    });
  }
  
  register(user: UserModel): Observable<any> {
    throw new Error("Method not implemented.");
  }
}