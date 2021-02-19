import { Component, OnInit, Input, Output } from '@angular/core';
import { IItem } from '../../interfaces/item.interface';
import { CartService } from '../../services/cart.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class ProductcardComponent  {

 @Input() product: IItem; 
 @Output() selected: IItem;

 constructor(config: NgbModalConfig, private modalService: NgbModal, private _cartService: CartService, private toastr: ToastrService) {
  // customize default values of modals used by this component tree
  config.keyboard = false;
}
openXl(content) {
  this.modalService.open(content, { size: 'lg' });
}

public addCart(product: IItem)
{
  this._cartService.changeCart(product);
  this.toastr.success('¡El producto fue añadido a tu carrito!', 'Enhorabuena :)');

}

  public ver(product: IItem)
  {
    this.selected = product;
    console.log(this.selected);
  }



  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }


}
