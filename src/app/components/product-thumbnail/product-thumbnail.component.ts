import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {

  @Input() product: Product;

  detailViewActive: boolean;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.detailViewActive = false;
  }

  onProductClick() {
    this.detailViewActive = !this.detailViewActive;
  }

 

}
