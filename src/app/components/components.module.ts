import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

//import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';
import { CartComponent } from './cart/cart.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SortFiltersComponent } from './sort-filters/sort-filters.component';
import { UrlFormComponent } from './url-form/url-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';
import { AngularMaterialModule } from '../angular-material.module';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ProductComponent } from './product/product.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { DividerdecoComponent } from './dividerdeco/dividerdeco.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JumbosearchComponent } from './jumbosearch/jumbosearch.component';
import { BtnvolvertiendaComponent } from './btnvolvertienda/btnvolvertienda.component';
import { ProductpreviewComponent } from './productpreview/productpreview.component';
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarritoComponent } from './carrito/carrito.component';
import { FiltrosComponent } from './filtros/filtros.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    CartComponent,
    ModalImagenComponent,
    FiltersComponent,
    ProductThumbnailComponent,
    SearchBarComponent,
    ShowcaseComponent,
    SortFiltersComponent,
    UrlFormComponent,
    WhatsappComponent,
    ProductComponent,
    ProductcardComponent,
    DividerdecoComponent,
    JumbosearchComponent,
    BtnvolvertiendaComponent,
    ProductpreviewComponent,
    CarritoComponent,
    FiltrosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularMaterialModule,
    FontAwesomeModule,
    NgbModule,
    NgbPaginationModule
    
    
  ],
  exports: [
    IncrementadorComponent,
    CartComponent,
    ModalImagenComponent,
    FiltersComponent,
    ProductThumbnailComponent,
    SearchBarComponent,
    ShowcaseComponent,
    SortFiltersComponent,
    UrlFormComponent,
    WhatsappComponent,
    ProductComponent,
    ProductcardComponent,
    DividerdecoComponent,
    JumbosearchComponent,
    SearchBarComponent,
    BtnvolvertiendaComponent,
    ProductpreviewComponent,
    CarritoComponent,
    FiltrosComponent
  ],
  providers: [
    DataService,
    CartService,
    
  ]
})
export class ComponentsModule { }
