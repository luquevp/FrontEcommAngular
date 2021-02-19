import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product.model';
import { FiltersComponent } from '../../components/filters/filters.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { DataService } from '../../services/data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  {

  
}
