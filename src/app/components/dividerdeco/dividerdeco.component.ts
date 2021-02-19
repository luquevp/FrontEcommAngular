import { Component, OnInit, Input } from '@angular/core';
import { faShippingFast, faSprayCan, faWallet } from '@fortawesome/free-solid-svg-icons';
import { IDivider } from '../../interfaces/dividers.interface';


@Component({
  selector: 'app-dividerdeco',
  templateUrl: './dividerdeco.component.html',
  styleUrls: ['./dividerdeco.component.scss']
})
export class DividerdecoComponent implements OnInit {

  @Input() divider: IDivider;
  


  public dividers: Array<IDivider> = [{
    id: 0,
    icon: faSprayCan,
    title: 'Sanitizamos los productos',
    content: 'Protocolo COVID-19.',
  },
  {
    id: 1,
    icon: faWallet,
    title: 'Compra mínima $1000',
    content: 'Solo efectivo.',
  },
  {
    id: 2,
    icon: faShippingFast,
    title: 'Envíos a todo el país',
    content: 'Despachamos en 24 hs.',
  }

];


  constructor() { }

  ngOnInit(): void {
  }

}
