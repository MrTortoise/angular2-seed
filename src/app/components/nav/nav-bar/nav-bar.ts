import {Component, Input} from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.html'
})
export class NavBar {
  @Input() title: string;
}
