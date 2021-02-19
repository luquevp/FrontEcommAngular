import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { IItem } from '../../interfaces/item.interface';

const OFFSET_HEIGHT = 170;
const PRODUCT_HEIGHT = 48;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public items: Array<IItem>
  // tslint:disable-next-line: no-inferrable-types
  public totalPrice:number = 0;
  public totalQuantity:number = 0;
  constructor(private _cartService:CartService) { }

  ngOnInit() {
    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.items = x;
        this.totalQuantity = x.length;
        this.totalPrice = x.reduce((sum, current) => sum + (current.price * current.quantity), 0);
      }
    })
  }

  public remove(producto:IItem)
  {
    this._cartService.removeElementCart(producto);
  }

}
