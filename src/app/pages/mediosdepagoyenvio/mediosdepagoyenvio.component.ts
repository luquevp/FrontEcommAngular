import { Component, OnInit, Input } from '@angular/core';
import { faExchangeAlt, faMoneyCheckAlt, faPiggyBank, faShippingFast, faSprayCan, faTruckLoading, faWallet } from '@fortawesome/free-solid-svg-icons';
import { IMediosDePago } from '../../interfaces/mediosdepago.interface';
import { IMediosDeEnvio } from '../../interfaces/mediosdeenvio.interface';

@Component({
  selector: 'app-mediosdepagoyenvio',
  templateUrl: './mediosdepagoyenvio.component.html',
  styleUrls: ['./mediosdepagoyenvio.component.scss']
})
export class MediosdepagoyenvioComponent implements OnInit {




  public mediosdepago: Array<IMediosDePago> = [{
    id: 0,
    icon: faExchangeAlt,
    title: 'Transferencia Bancaria',
    content: '',
  },
  {
    id: 1,
    icon: faMoneyCheckAlt,
    title: 'Mercado Pago',
    content: '',
  },
  {
    id: 2,
    icon: faPiggyBank,
    title: 'Deposito Bancario',
    content: '',
  }

];

public mediosdeenvio: Array<IMediosDeEnvio> = [{
  id: 0,
  icon: faTruckLoading,
  title: 'Delivery (Tucumán)',
  content: '',
},
{
  id: 1,
  icon: faShippingFast,
  title: 'Envíos a todo el país',
  content: '',
},

];

  constructor() { }

  ngOnInit(): void {
  }

}
