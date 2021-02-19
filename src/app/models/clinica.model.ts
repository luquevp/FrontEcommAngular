interface _ClinicaUser {
  _id: string;
  nombre: string;
  img: string;
}


export class Clinica {

  constructor(
      public nombre: string,
      public _id?: string,
      public img?: string,
      public usuario?: _ClinicaUser,
  ) {}

}

