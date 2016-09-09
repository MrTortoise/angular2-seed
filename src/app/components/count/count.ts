import {Component} from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';
import {CountActions} from '../../actions';

@Component({
  selector: 'count',
  templateUrl: './count.html',
  providers: [CountActions]
})
export class Count {
  @select(s => s.count) count$: Observable<number>;

  constructor(
    private actions: CountActions) {

  }

  increment() {
    this.actions.increment();
  }
}
