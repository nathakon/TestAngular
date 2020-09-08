import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'AngularCCS'

  getColorStyle(){
    return "white"
  }

  getBGColorStyle(){
    return "red"
  }

}
