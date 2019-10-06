export class Cuenta {
    id: number;
    nombre: string;
    apellido: string;
    usuario: string;
    password: string;
    saldo: number;
    estado: boolean;
    constructor(nombre: string, apellido: string, usuario:string, password:string){
      this.id = 0;
      this.nombre = nombre;
      this.apellido = apellido;
      this.password = password;
      this.usuario = usuario;
      this.saldo = 10000;
      this.estado = true;
    }
  }
  