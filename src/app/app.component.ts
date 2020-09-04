import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Event Binding'
  isError =false;

  onKeyPressEnter($event){
    if($event.keyCode === 13){
      console.log('Press Enter :',$event.target.value)
    }
  }
}
