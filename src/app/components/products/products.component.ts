import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      name: 'Boody Story',
      price: 11,
      image: './assets/images/toy.png'
    },
    {
      id: '2',
      name: 'Xbox Series X',
      price: 500,
      image: './assets/images/xbox.jpg'
    },
    {
      id: '3',
      name: 'Libros Aventure',
      price: 11,
      image: './assets/images/libros.jpg'
    }
    ,{
      id: '4',
      name: 'Buso Esy',
      price: 11,
      image: './assets/images/buso.jfif'
    }
  ]

  myShoppinCart: Product[] = []
  total = 0

  constructor(private _storeService: StoreService) {
    this.myShoppinCart = this._storeService.getMyShoppinCart();

  }

  ngOnInit(): void {
  }

  onAddToShoppinCart(product: Product){
    this._storeService.addProduct(product);
    this.total = this._storeService.getTotal();
  }

}
