import {IAuthService} from './index';
import {Injectable} from '@angular/core';

@Injectable()
export class MockAuthService implements IAuthService {
  static EMAIL: string = "bob@email.com";
  static PASSWORD: string = "!23Qwe";
}