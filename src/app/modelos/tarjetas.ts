export class Tarjetas {
  public nombre: string;
  public aPaterno:string;
  public aMaterno:string;
  public direccion:string;
  public senas:string;
  public entrecalles:string;
  public articulo:string;
  public precio:number;
  public saldo:number;
  public pago:number;
  public estado:string;

  constructor() {
    this.nombre= "";
    this.aPaterno= "";
    this.aMaterno= "";
    this.direccion= "";
    this.senas= "";
    this.entrecalles ="";
    this.articulo= "";
    this.precio=0;
    this.saldo=0;
    this.pago=0;
    this.estado= "";
  }

}
