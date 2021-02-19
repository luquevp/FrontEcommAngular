import { Component, OnInit } from '@angular/core';
import { IItem } from '../../interfaces/item.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  public listProducts: Array<IItem> = [{
    id: 0,
    img: 'https://i.blogs.es/d5526e/arduino-uno/450_1000.jpg',
    name: 'Arduino',
    price: 500,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id. ',
        quantity : 1
  },
  {
    id: 1,
    img: 'https://electronilab.co/wp-content/uploads/2016/02/NodeMCU-%E2%80%93-Board-de-desarrollo-con-m%C3%B3dulo-ESP8266-WiFi-y-Lua-1.jpg',
    name: 'ESP8266 NodeMCU',
    price: 350,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id. ',    quantity : 1
  },
  {
    id: 2,
    img: 'https://electronilab.co/wp-content/uploads/2016/02/NodeMCU-%E2%80%93-Board-de-desarrollo-con-m%C3%B3dulo-ESP8266-WiFi-y-Lua-1.jpg',
    name: 'ESP8266 NodeMCU',
    price: 350,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id. ',
        quantity : 1
  },
  {
    id: 3,
    img: 'https://electronilab.co/wp-content/uploads/2016/02/NodeMCU-%E2%80%93-Board-de-desarrollo-con-m%C3%B3dulo-ESP8266-WiFi-y-Lua-1.jpg',
    name: 'ESP8266 NodeMCU',
    price: 350,
    description: '',
        quantity : 1
  },
  {
    id: 4,
    img: 'https://electronilab.co/wp-content/uploads/2016/02/NodeMCU-%E2%80%93-Board-de-desarrollo-con-m%C3%B3dulo-ESP8266-WiFi-y-Lua-1.jpg',
    name: 'ESP8266 NodeMCU',
    price: 350,
    description: '',
        quantity : 1
  },
  {
    id: 5,
    img: 'https://createc3d.com/shop/1244-thickbox_default/comprar-modulo-rele-5v-compatible-con-arduino-1-canal-precio-oferta.jpg',
    name: 'Modulo Relay Rele De 1 Canal 5v 10a Arduino Pic Avr Robotica',
    price: 120,
    description: '',
    quantity : 1
  },
  {
    id: 6,
    img: 'https://electronilab.co/wp-content/uploads/2016/02/NodeMCU-%E2%80%93-Board-de-desarrollo-con-m%C3%B3dulo-ESP8266-WiFi-y-Lua-1.jpg',
    name: 'ESP8266 NodeMCU',
    price: 350,
    description: '',
    quantity : 1
  },
  {
    id: 7,
    img: 'https://electronilab.co/wp-content/uploads/2016/02/NodeMCU-%E2%80%93-Board-de-desarrollo-con-m%C3%B3dulo-ESP8266-WiFi-y-Lua-1.jpg',
    name: 'ESP8266 NodeMCU',
    price: 350,
    description: '',
        quantity : 1
  }];

  constructor() { }

  ngOnInit() {
  }

  

}
