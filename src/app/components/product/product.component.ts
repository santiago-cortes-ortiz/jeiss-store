import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: 'default',
    name: 'default',
    price: 0,
    image: './assets/images/default-image.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
