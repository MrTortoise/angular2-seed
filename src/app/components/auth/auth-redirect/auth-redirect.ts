import {Component, OnInit, Inject} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService, IAuthService} from '../../../services/auth'

@Component({
  selector: 'auth-redirect',
  templateUrl: './auth-redirect.html'
})
export class AuthRedirect implements OnInit {
  
    constructor(
    @Inject(AuthService) private authService: IAuthService,
    private router: Router) {}

  ngOnInit() {
    alert(this.router.url);
  }

}