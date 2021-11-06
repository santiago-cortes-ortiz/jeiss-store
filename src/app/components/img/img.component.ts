import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit,OnDestroy {

  @Input() img: string ='mi store';
  @Output() loaded = new EventEmitter<string>();
  imageFefault = './assets/images/default-image.jpg'

  counter: number = 0

  constructor() {
    //before render
    console.log('constructor','imgValue =>', this.img)

  }

  ngOnChanges(){
    //before render
    //cambios en los inputs -- time corre muchas veces
    console.log('ngOnChange','imgValue =>', this.img)
  }

  ngAfterViewInit(){
    //AFTER render
    //handler children
    console.log('ngOnViewInit')
  }

  ngOnInit(): void {
    //before render
    //async - fetch --once o corre una sola vez
    console.log('ngOnInit','imgValue =>', this.img)

  }

  ngOnDestroy(){
    //delete componente dejamos de verlo en la interfaz
    console.log('ngOnDestroy')

  }

  imgError(){
    this.img = this.imageFefault
  }
  loadImage(){
    console.log('log hijo')
    this.loaded.emit(this.img);
  }
}
