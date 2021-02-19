import { Component, OnInit } from '@angular/core';
import { IPreguntaFrecuente } from '../../interfaces/preguntasfrecuentes.interface';

@Component({
  selector: 'app-preguntasfrecuentes',
  templateUrl: './preguntasfrecuentes.component.html',
  styleUrls: ['./preguntasfrecuentes.component.scss']
})
export class PreguntasfrecuentesComponent implements OnInit {


  
  public preguntas: Array<IPreguntaFrecuente> = [{
    id: 0,
    title: '¿Cuánto es la compra mínima mayorista?',
    content: 'La compra minima es $1000',
  },
  {
    id: 1,
    title: '¿Realizan envios?    ',
    content: 'Si. Hacemos envios a todo el pais.    ',
  },
  {
    id: 2,
    title: 'Envíos a todo el país¿En qué tiempo despachan los pedidos?    ',
    content: '-Despachamos dentro de las 24 hs. una vez se haya realizado el pago en el caso de envíos a Argentina',
  }

];



  constructor() { }

  ngOnInit(): void {
  }

}
