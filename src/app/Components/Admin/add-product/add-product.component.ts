import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
// Day5
export class AddProductComponent implements OnInit {
newPrd:Iproduct = {} as Iproduct;
catList:Icategory[];
  constructor(private prdApiService:ProductApiService,private router:Router) { 

    this.catList =[
      {id:1,name:"Mobile"},
      {id:2,name:"Laptop"},
      {id:3,name:"TV"},
    ]
  }

  ngOnInit(): void {
  }

  insertNewProduct(){
    // First test case
    // let testProduct:Iproduct={
    //   id:67,
    //   name:"test2 from api",
    //   price:88,
    //   quantity:4,
    //   imgURL:"",
    //   catID:1

    // };
    // this.prdApiService.addNewProduct(testProduct).subscribe(prd=>{

    //   this.router.navigate(['/Order']);
    // })

    // Second test case
    this.prdApiService.addNewProduct(this.newPrd).subscribe(prd=>{this.router.navigate(['/Order'])})
  }

}
