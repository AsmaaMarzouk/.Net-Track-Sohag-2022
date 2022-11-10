import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prd:Iproduct|undefined=undefined;
  prdIDsList:number[] = [];
  currentPrdID:number=0;
  currentIndex:number=0;
  // prd?:Iproduct; //working
  constructor(private productService: ProductsService,
              private activedRoute: ActivatedRoute,
              private location:Location,
              private router:Router) { }

  ngOnInit(): void {
    // First test case
    // let sendProductId=this.activedRoute.snapshot.paramMap.get('pid');
    // console.log(sendProductId);

    // // Second test case
    // let sendProductID:number=(this.activedRoute.snapshot.paramMap.get('pid'))?Number(this.activedRoute.snapshot.paramMap.get('pid')):0;
    // // console.log(sendProductID);
    // let foundPrd=this.productService.getProductByID(sendProductID);
    // if(foundPrd)
    // {
    //   this.prd=foundPrd;
    //   console.log(this.prd);
    // }

    // else{
    //   alert("Product not found")
    //   this.location.back();
    // }

    // Third test case
     this.prdIDsList= this.productService.getProductsIDList();
    // console.log(this.prdIDsList);
    
    // this.currentPrdID=(this.activedRoute.snapshot.paramMap.get('pid'))?Number(this.activedRoute.snapshot.paramMap.get('pid')):0;
    // let foundPrd=this.productService.getProductByID(this.currentPrdID);
    // if(foundPrd)
    // {
    //   this.prd=foundPrd;
    //   // console.log(this.prd);
    // }

    // else{
    //   alert("Product not found")
    //   this.location.back();
    // }

    // Forth test case
    // obserserable
    // subscribe
    this.activedRoute.paramMap.subscribe(paramMap =>{
      // 
      this.currentPrdID=(paramMap.get('pid'))?Number(paramMap.get('pid')):0;
      let foundPrd=this.productService.getProductByID(this.currentPrdID);
       if(foundPrd)
        {
         this.prd=foundPrd;
       }

      else{
        alert("Product not found")
        this.location.back();
    
      }
    })
     
  }
  prevFunc(){

    this.currentIndex=this.prdIDsList.findIndex((item)=>item==this.currentPrdID);
    // console.log(this.currentIndex);
    this.router.navigate(['/Products',this.prdIDsList[--this.currentIndex]]);
  }
  nextFunc(){
    this.currentIndex=this.prdIDsList.findIndex((item)=>item==this.currentPrdID);
    this.router.navigate(['/Products',this.prdIDsList[++this.currentIndex]]);
  }
  goBack(){
    this.location.back();
  }

}
