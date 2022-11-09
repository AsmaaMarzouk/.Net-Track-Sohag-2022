import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements OnInit,AfterViewInit {
 catList:Icategory[];
 selectedCatID:number = 0;
 receivedTotalPrice:number = 0;

//  @ViewChild('userName') userNameElement:ElementRef|null=null;
//  @ViewChild('userName') userNameElement:ElementRef|undefined=undefined;
// ? => safe navigation
//  @ViewChild('userName') userNameElement?:ElementRef;
// ! => null assertion operator
 @ViewChild('userName') userNameElement!:ElementRef;

 @ViewChild(ProductsComponent) prdComRef!:ProductsComponent;
  constructor() { 
    this.catList=[
      {id:1,name:"Mobile"},
      {id:2,name:"Laptop"},
      {id:3,name:"TV"},

    ] ;
  }
  

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // if(this.userNameElement)
    this.userNameElement.nativeElement.value="Value from ts to user input";
    // console.log(this.prdComRef.prdListOfCat);
    
  }
  ontotalPriceChanged(totalPrice:number){

    this.receivedTotalPrice=totalPrice;

  }

  getArrayItems()
  {
    console.log(this.prdComRef.prdListOfCat);
    
  }
}
