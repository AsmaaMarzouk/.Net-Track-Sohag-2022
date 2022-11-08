import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/Models/store-info';
import { StoreInterface } from 'src/app/Models/store-interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// class property
   storeClass:StoreInfo;

  //  interface
      storeData:StoreInterface={name:"ITI Store",coverImg:'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg',branches:["Qena","Sohag","Alex","Smart"]};

      // event binding
      showImg:boolean =true;

      // input
      userFeedback:string="Very Good";
  constructor() { 
    this.storeClass=new StoreInfo('ITI Students','https://i.pinimg.com/originals/86/90/14/869014ea87e157354d2326a5961b20e0.png',['item1','item2','item3']);

   
  }

  toggleImg(){

    this.showImg=!this.showImg;
  }

  ngOnInit(): void {
  }

}
