export class Moto{
    private marca:string;
    private modelo:string;
    private patente:string;
    private anioDeFabricacion:number;
    private cilindrada:number;

    constructor(marca:string,modelo:string,patente:string,anioDeFabricacion:number, cilindrada:number){
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.anioDeFabricacion = anioDeFabricacion;
        this.cilindrada = cilindrada;
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

    getCilindrada():number{
        return this.cilindrada;
    };
    setCilindrada(cilindrada:number){
        this.cilindrada=cilindrada;
    };
    
}