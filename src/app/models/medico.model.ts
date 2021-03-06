import { Clinica } from './clinica.model';

interface _MedicoUser {
    _id: string;
    nombre: string;
    img: string;
}


export class Medico {

    constructor(
        public nombre: string,
        public _id?: string,
        public img?: string,
        public usuario?: _MedicoUser,
        public clinica?: Clinica
    ) {}

}

