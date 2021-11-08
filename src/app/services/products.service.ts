import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) { }

  getAllProducts(){
    return this._httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

}
