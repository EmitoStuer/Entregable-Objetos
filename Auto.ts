export class Auto{
    private marca:string;
    private modelo:string;
    private patente:string;
    private anioDeFabricacion:number;
    private cantidadDePuertas:number;

    constructor(marca:string,modelo:string,patente:string,anioDeFabricacion:number,cantidadDePuertas:number){
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.anioDeFabricacion = anioDeFabricacion;
        this.cantidadDePuertas = cantidadDePuertas;
    }

    getMarca():string{
        return this.marca;
    };
    setMarca(marca:string){
        this.marca = marca;
    };
    getModelo():string{
        return this.modelo;
    };
    setModelo(modelo:string){
        this.modelo=modelo;
    };
    getPatente():string{
        return this.patente;
    };
    setPatente(patente:string){
        this.patente = patente;
    };
    getAnioDeFabricacion():number{
        return this.anioDeFabricacion;
    };
    setAnioDeFabricacion(anioDeFabricacion:number){
        this.anioDeFabricacion=anioDeFabricacion;
    };

    getCantidadDePuertas():number{
        return this.cantidadDePuertas;
    };
    setCantidadDePuertas(cantidadDePuertas:number){
        this.cantidadDePuertas=cantidadDePuertas;
    };

}