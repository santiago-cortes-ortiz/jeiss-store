import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeMenu: boolean = false;
  counter = 0;

  constructor(private _storeService: StoreService) { }

  ngOnInit(): void {
    this._storeService.myCart$.subscribe(products => {
      this.counter = products.length
    });
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu
  }

}
