import {Component, OnInit, Inject} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthorizationService, IAuthorizationService} from '../../../services/auth'

@Component({
  selector: 'auth-logout',
  templateUrl: './auth-logout.html'
})
export class AuthLogout implements OnInit {
  
    constructor(
    @Inject(AuthorizationService) private _authService: IAuthorizationService,
    private router: Router) {}

  ngOnInit() {
    this._authService.clearToken();
  }

}