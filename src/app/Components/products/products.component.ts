import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnChanges {

  // comment => Day4 
  //  prdList:Iproduct[];
  //  Day3
  // property decorator
 @Input() receivedCatID:number = 0;
  prdListOfCat:Iproduct[]=[];
  totalPrice:number = 0;
  // 1-declare event
  @Output() totalPriceChanged:EventEmitter<number>;
  // inject inside constructor
  constructor(private prdService:ProductsService,private route:Router) { 
    // Day3
    this.totalPriceChanged=new EventEmitter<number>();


    // intialize array with objects
    // category id => mobile : 1 , laptop: 2, tv : 3
    // this.prdList=[
    //   {id:1,name:'Samsung',price:12500,quantity:0,imgURL:'https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:1},
    //   {id:14,name:'Redmi',price:8000,quantity:2,imgURL:'https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:1},
    //   {id:18,name:'Lenovo',price:25000,quantity:1,imgURL:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:2},
    //   {id:22,name:'HP',price:30000,quantity:5,imgURL:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:2},
    //   {id:36,name:'LG',price:40000,quantity:0,imgURL:'https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:3},
    //   {id:42,name:'Tornado',price:45000,quantity:7,imgURL:'https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:3},
    // ];

   
  }
  ngOnChanges(): void {
    // Day3
    // this.getProductsOfCatID();

    // Day4
    this.prdListOfCat=this.prdService.getProductsOfCatID(this.receivedCatID);
  }

  ngOnInit(): void {
    // Day3
    // this.getProductsOfCatID();

    // Day4
    // this.prdListOfCat=this.prdService.getProductsOfCatID(this.receivedCatID);

  }

  // Day3
  // private getProductsOfCatID()
  // {
  //   if(this.receivedCatID==0)
  //   {
  //     // this.prdListOfCat = this.prdList;
  //     // from take copy from prdList array to another prdListOfCat array
  //     this.prdListOfCat =Array.from(this.prdList);
  //     return;
  //   }

  //   this.prdListOfCat= this.prdList.filter((prd)=>prd.catID==this.receivedCatID);

  // }

  updateTotalPrice(prdPrice:number,itemsCount:any){
    // this.totalPrice +=  (prdPrice * itemsCount)
    // convert string to number
    // this.totalPrice +=  (prdPrice * parseInt(itemsCount));
    // this.totalPrice +=  (prdPrice * Number(itemsCount));
    // this.totalPrice +=  (prdPrice * itemsCount as number);
    this.totalPrice +=  (prdPrice * +itemsCount);

    this.totalPriceChanged.emit(this.totalPrice);

  }

  // Day4
  openPrdDetails(prdID:number){

    // this.route.navigate(['path',parameter])
    this.route.navigate(['Products',prdID]);
  }

}
