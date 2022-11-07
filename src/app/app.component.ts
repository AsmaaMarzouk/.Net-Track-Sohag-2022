import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '.Net Track';

  sayHello(){
    return "Hello "+this.title;
  }
  
}




