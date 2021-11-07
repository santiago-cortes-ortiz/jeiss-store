import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppinCart: Product[] = []
  total = 0

  constructor() { }

  addProduct(product: Product){
    this.myShoppinCart.push(product)
  }

  getMyShoppinCart(){
    return this.myShoppinCart
  }

  getTotal(){
    return this.total = this.myShoppinCart.reduce((sum,item) => sum + item.price,0)
  }
}
