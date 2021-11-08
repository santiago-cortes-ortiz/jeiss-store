import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppinCart: Product[] = []
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  total = 0

  constructor() { }

  addProduct(product: Product){
    this.myShoppinCart.push(product)
    this.myCart.next(this.myShoppinCart)
  }

  getMyShoppinCart(){
    return this.myShoppinCart
  }

  getTotal(){
    return this.total = this.myShoppinCart.reduce((sum,item) => sum + item.price,0)
  }
}
