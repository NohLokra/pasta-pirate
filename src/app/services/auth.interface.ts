import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/user.model';

export interface IAuthService {
  login(email: string, password: string) : Observable<any>;
  register(user: UserModel) : Observable<any>;
}