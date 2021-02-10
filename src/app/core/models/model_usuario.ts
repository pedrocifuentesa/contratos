export class ModelUsuario {

    constructor(
      public idusuario : number,
      public rut : string,
      public usuario : string,
      public pass : string,
      public fcreacion : string,
      public correo : string,
      public tipoUsuario : 'ADMIN' | 'NORMAL',
    ) { }
  
  }