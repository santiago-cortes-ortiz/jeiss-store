import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
//
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []


  myShoppinCart: Product[] = []
  total = 0

  constructor(private _storeService: StoreService, private _productsService: ProductsService) {
    this.myShoppinCart = this._storeService.getMyShoppinCart();
  }

  ngOnInit(): void {
    this._productsService.getAllProducts().subscribe(
      data => {
        this.products = data;
      }
    );
  }

  onAddToShoppinCart(product: Product){
    this._storeService.addProduct(product);
    this.total = this._storeService.getTotal();
  }

}
