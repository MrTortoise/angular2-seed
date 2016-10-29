import {Component, Output, Inject, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {IExternalAuthenticationProvider, ITokenResult, ExternalAuthenticationProvider} from '../../../../services/auth';

@Component({
  selector: 'auth-external',
  templateUrl: './auth-external.html'
})
export class AuthExternal implements OnInit, OnDestroy {
  @Output() onComplete = new EventEmitter<ITokenResult>();
  @Output() onError = new EventEmitter<Error>();

  private _resultObservable: Subscription;

  constructor(
    @Inject(ExternalAuthenticationProvider)private _authProvider: IExternalAuthenticationProvider) {
      
    this._resultObservable = this._authProvider
      .loginTokens
      .subscribe(
        result => { this.onComplete.emit(result); }, 
        error => { this.onError.emit(error); } );
  }

  ngOnInit() {
    this._authProvider.beginLogin();
  }

  ngOnDestroy() {
    this._resultObservable.unsubscribe();
  }
}
