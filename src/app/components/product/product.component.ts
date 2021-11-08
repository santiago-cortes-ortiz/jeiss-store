import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {

  @Input() product: Product = {
    id: 'default',
    title: 'title',
    price: 0,
    image: './assets/images/default-image.jpg',
    description: 'description',
    category: 'category'
  }



  @Output() addProduct = new EventEmitter<Product>();

  constructor() { }



  onAddToCart(){
    this.addProduct.emit(this.product);
  }
}
