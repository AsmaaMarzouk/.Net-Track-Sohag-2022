import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})

// Day4
export class ProductsService {
  prdList:Iproduct[];

  constructor() {
    this.prdList=[
      {id:1,name:'Samsung',price:12500,quantity:0,imgURL:'https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:1},
      {id:14,name:'Redmi',price:8000,quantity:2,imgURL:'https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:1},
      {id:18,name:'Lenovo',price:25000,quantity:1,imgURL:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:2},
      {id:22,name:'HP',price:30000,quantity:5,imgURL:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:2},
      {id:36,name:'LG',price:40000,quantity:0,imgURL:'https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:3},
      {id:42,name:'Tornado',price:45000,quantity:7,imgURL:'https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',catID:3},
    ];
   }

  //  Function return all products 
  getAllProducts():Iproduct[] {

    return this.prdList;
  }

  // Function return products of catID 
  getProductsOfCatID(catId:number):Iproduct[] {

    if(catId == 0)
    {
      return this.getAllProducts();
    }
    else{
      return this.prdList.filter(prd=>prd.catID == catId)
    }
  }

  // Function get product based on product ID
  getProductByID(prdID:number):Iproduct|undefined {

    return this.prdList.find(prd=>prd.id==prdID);
  }

  // return list of ids => array of ids of products 
  getProductsIDList():number[] {
    return this.prdList.map(prd=> prd.id);
  }
}
