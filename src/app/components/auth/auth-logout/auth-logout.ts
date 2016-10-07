import {Component, OnInit, Inject} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService, IAuthService} from '../../../services/auth'

@Component({
  selector: 'auth-logout',
  templateUrl: './auth-logout.html'
})
export class AuthLogout implements OnInit {
  
    constructor(
    @Inject(AuthService) private authService: IAuthService,
    private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      if (loggedIn) {
        this.authService.logout().subscribe(() => {
          this.router.navigate(["auth/login"]);
        });
      }
      else {
        this.router.navigate(["auth/login"]);
      }
    })
  }

}