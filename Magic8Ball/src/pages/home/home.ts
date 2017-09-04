import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {magic8Ball} from '../magic8Ball/magic8Ball'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {

  }

itemTapped(){
  this.nav.push(magic8Ball)
}

}
