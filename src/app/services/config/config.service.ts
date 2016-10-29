import {OpaqueToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IAuthConfig} from 'angular2-jwt';
import {IConfigState} from '../../store';

export const ConfigService = new OpaqueToken("config.service"); 

export interface IConfigService {
  get(): Observable<IConfigState>;
}
