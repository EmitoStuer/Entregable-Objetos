import {Auto} from "./Auto";
import {Moto} from "./Moto";
import {Camion} from "./Camion";
export class RegistroAutomotor{
    private nombre:string;
    private listaAutos:Auto[];
    private listaMotos:Moto[];
    private listaCamiones:Camion[];
    constructor(nombre:string){
        this.nombre = nombre;
        this.listaAutos = [];
        this.listaMotos = [];
        this.listaCamiones = [];
    }
    

    
}