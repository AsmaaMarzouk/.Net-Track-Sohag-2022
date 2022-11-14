import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
// Day5
export class ProductApiService {

  private httpOptions={};
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
  }
  // return observerable
    // generic
    // Function return all products
    getAllProducts():Observable<Iproduct[]>{


      // return this.httpClient.get<Iproduct[]>(`http://localhost:3000/products`);
      return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/products`);
    }

    // get products by catID
    getProductsByCatId(catId:number):Observable<Iproduct[]>{

      // Query string
      return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/products?catID=${catId}`);
    }

    getProductByID(prdID:number):Observable<Iproduct>{
      // url param
      return this.httpClient.get<Iproduct>(`${environment.APIBaseURL}/products/${prdID}`)
    }

    // Add new product
    addNewProduct(newPrd:Iproduct):Observable<Iproduct>{
      // server => string => JSON.stringify
      // JSON.parse()
      return this.httpClient.post<Iproduct>(`${environment.APIBaseURL}/products`,JSON.stringify(newPrd),this.httpOptions)
    
      // operators
      // Advanced point
      // .pipe(
      //   retry(3),
      //   catchError((err)=>{
      //     return throwError(()=>{
      //       return new Error('Error occured , please try again')
      //     })
      //   })
      // )
    }



  }
