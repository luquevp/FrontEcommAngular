import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { IItem } from '../../interfaces/item.interface';


@Component({
  selector: 'app-productpreview',
  templateUrl: './productpreview.component.html',
  styleUrls: ['./productpreview.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ProductpreviewComponent  {

  @Input() product: IItem;
  @Input() selected: IItem;

  default: "../../../assets/images/WhatsApp.png";

  constructor(config: NgbModalConfig, private modalService: NgbModal, private _cartService: CartService) {
    // customize default values of modals used by this component tree
    config.keyboard = false;
  }
  openXl(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  public addCart(product: IItem)
  {
    this._cartService.changeCart(product);
  }

  
}
