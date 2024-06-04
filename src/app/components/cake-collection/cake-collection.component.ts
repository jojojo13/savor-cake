import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-cake-collection',
  templateUrl: './cake-collection.component.html',
  styleUrls: ['./cake-collection.component.scss']
})
export class CakeCollectionComponent implements OnInit {
  @Output() cakeNumberInCartEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  getCakeNumberInCart(cake: any) {
    this.cakeNumberInCartEmitter.emit(cake);

  }
}
