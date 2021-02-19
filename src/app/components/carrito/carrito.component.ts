import { Component, OnInit } from '@angular/core';
import { IItem } from '../../interfaces/item.interface';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public items: Array<IItem>
  // tslint:disable-next-line: no-inferrable-types
  public totalPrice:number = 0;
  public totalQuantity:number = 0;
  constructor(private _cartService:CartService, private toastr: ToastrService, private usuarioService: UsuarioService, private router: Router) { }

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
    this.toastr.success('¡El producto fue eliminado de tu carrito!', ' Adios :( ');

  }

  public comprar()
  {
    return this.usuarioService.validarToken()
    .pipe(
      tap( estaAutenticado =>  {
        if ( !estaAutenticado ) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }

}
