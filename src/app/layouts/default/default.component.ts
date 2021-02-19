import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { IItem } from '../../interfaces/item.interface';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  public openCart:boolean = false;
  public cantProducts:number = 0;
  // tslint:disable-next-line: no-inferrable-types
  public totalQuantity:number = 0;


  constructor( private auth: AuthService,
               private router: Router ,
               private _cartService:CartService) { }
  
  ngOnInit() {
    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.totalQuantity = x.length;
      }
    })
  }

  

salir() {

this.auth.logout();
this.router.navigateByUrl('/login');

}

  sideBarToggler(event: Event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

 

  public cart(){
    this.openCart = !this.openCart;
  }

}
