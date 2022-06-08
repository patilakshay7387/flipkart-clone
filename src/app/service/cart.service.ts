import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cardItemList:any=[];
public productList=new BehaviorSubject<any>([]);

  constructor() { }
  getProduct(){
    return this.productList.asObservable();

   }
   setProduct(product:any){
     this.cardItemList.push(...product);
     this.productList.next(product);//data pass where it is subscrbr
   }
   addtoCart(product:any){
     this.cardItemList.push(product);
     this.productList.next(this.cardItemList);
     this.getTotalPrice();
     console.log(this.cardItemList);
   }
   getTotalPrice(){
     let grandTotal=0;
     this.cardItemList.map((a:any)=>{
       grandTotal+=a.total;

     })
   }
   removeCartItem(product:any){
     this.cardItemList.map((a:any,index:any)=>{
       if(product.id===a.id){
         this.cardItemList.splice(index,1);
       }

     })
   }

   removeAllCart(){
     this.cardItemList=[];
   }
}
