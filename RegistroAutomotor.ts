import * as rls from 'readline-sync';
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
    opcionesVehiculos():void{
        let opcionSeleccionada : number;
        do {
            console.log(`Opciones \n 1 - Agregar Vehiculo \n 2 - Ver Vehiculos \n 3 - Modificar un Vehiculo \n 4 - Eliminar Vehiculo \n 5 - Salir`);
            opcionSeleccionada = rls.questionInt("Ingrese la Opcion que Desee: ");
            while (opcionSeleccionada<1 || opcionSeleccionada>5){
                opcionSeleccionada = rls.questionInt("Seleccione el numero que figura en la opcion: \n 1 - Agregar. \n 2 - Ver. \n 3 - Modificar. \n 4 - Eliminar. \n 5 - Salir ");
            }
            
                switch (opcionSeleccionada){
                    case 1 : this.agregarVehiculo();
                    break;
                    case 2 : this.verVehiculos();
                    break;
                    case 3 : this.modificarVehiculo();
                    break;
                    case 4 : this.eliminarVehiculo();
                    break;
                    case 5 : console.log("Saliendo...");
                    break;
                    default: console.log("Error de Datos");
                }
            
        }while(opcionSeleccionada!==5);
    }

    agregarVehiculo():void{
        let opcionSeleccionada : number ;
        do {
        console.log(`Que vehiculo desea Agregar \n 1 - Auto. \n 2 - Moto. \n 3 - Camion. \n 4 - Salir.`);
        opcionSeleccionada = rls.questionInt("Ingrese la Opcion que Desee: ");
            while (opcionSeleccionada<1 || opcionSeleccionada>4){
                opcionSeleccionada = rls.questionInt("Seleccione \n 1 - Auto. \n 2 - Moto. \n 3 - Camion. \n 4 - Salir. ");
            }
            
                switch (opcionSeleccionada){
                    case 1 : this.crearAuto();
                    opcionSeleccionada=4;
                    break;
                    case 2 : this.crearMoto();
                    opcionSeleccionada=4;
                    break;
                    case 3 : this.crearCamion();
                    opcionSeleccionada=4;
                    break;
                    case 4 : console.log("Saliendo...");
                    break;
                    default: console.log("Error de Datos");
                }

            } while (opcionSeleccionada !== 4);
    }
    
    crearAuto():void{
        let datosVehiculo = this.crearVehiculo();
        let cantidadDePuertas : number = rls.questionInt("Ingrese Cantidad De Puertas: ");
        let auto : Auto = new Auto(datosVehiculo.marca,datosVehiculo.modelo,datosVehiculo.patente,datosVehiculo.anioDeFabricacion,cantidadDePuertas);
        this.agregarListaAutos(auto);
        console.log("Auto Agregado Correctamente");
        this.esperarEnter();
    };

    agregarListaAutos(auto:Auto):void{
        this.listaAutos.push(auto);
    }

    crearMoto():void{
        let datosVehiculo = this.crearVehiculo();
        let cilindrada : number = rls.questionInt("Ingrese Cilindrada: ");
        let moto : Moto = new Moto(datosVehiculo.marca,datosVehiculo.modelo,datosVehiculo.patente,datosVehiculo.anioDeFabricacion,cilindrada);
        this.agregarListaMotos(moto);
        console.log("Moto Agregada Correctamente");
        this.esperarEnter();                
    };

    agregarListaMotos(moto:Moto):void{
        this.listaMotos.push(moto);
    }

    crearCamion():void{
        let datosVehiculo = this.crearVehiculo();
        let capacidadDeCarga : number = rls.questionInt("Ingrese Capacidad de Carga: ");
        let camion : Camion = new Camion(datosVehiculo.marca,datosVehiculo.modelo,datosVehiculo.patente,datosVehiculo.anioDeFabricacion,capacidadDeCarga);
        this.agregarListaCamiones(camion);
        console.log("Camion Agregado Correctamente");
        this.esperarEnter();
    };

    agregarListaCamiones(camion:Camion):void{
        this.listaCamiones.push(camion);
    };

    crearVehiculo(){
        let marca: string = rls.question("Ingrese Marca del Vehiculo: ");
        let modelo: string = rls.question("Ingrese Modelo del Vehiculo: ");
        let patente: string = rls.question("Ingrese Patente del Vehiculo: ");
        let anioDeFabricacion: number = rls.questionInt("Ingrese Año de Fabricacion: ");
        return { marca, modelo, patente, anioDeFabricacion };
    }
    
    listarAutos():void{
        if (this.listaAutos.length>0){
            this.listaAutos.forEach(a => this.mostrarDetalleAuto(a));
            this.esperarEnter();
        } else {
            console.log("No hay Autos para mostrar");
            this.esperarEnter();
        }   
    }

    listarMotos():void{
        if (this.listaMotos.length>0){
            this.listaMotos.forEach(m => this.mostrarDetalleMoto(m));
            this.esperarEnter();
        } else {
            console.log("No hay Motos para mostrar");
            this.esperarEnter();
        }
    }

    listarCamiones():void{
        if (this.listaCamiones.length>0){
        this.listaCamiones.forEach(c => this.mostrarDetalleCamion(c));
        this.esperarEnter();
    } else {
        console.log("No hay Camiones para mostrar");
        this.esperarEnter();
    }
    }

    listarVehiculos():void{
        this.listarAutos();
        this.listarMotos();
        this.listarCamiones();
    }

    verVehiculos():void{
        let opcionSeleccionada : number ;
        do{
        console.log(`Que tipo de Vehiculo desea ver  \n 1 - Auto. \n 2 - Moto. \n 3 - Camion. \n 4 - Todos. \n 5 - Salir`);
        opcionSeleccionada = rls.questionInt("Ingrese la Opcion que Desee: ");
            while (opcionSeleccionada<1 || opcionSeleccionada>5){
                opcionSeleccionada = rls.questionInt("Seleccione \n 1 - Auto. \n 2 - Moto. \n 3 - Camion. \n 4 - Todos. \n 5 - Salir ");
            }
            
                switch (opcionSeleccionada){
                    case 1 : this.listarAutos();
                    opcionSeleccionada=5;
                    break;
                    case 2 : this.listarMotos();
                    opcionSeleccionada=5;
                    break;
                    case 3 : this.listarCamiones();
                    opcionSeleccionada=5;
                    break;
                    case 4 : this.listarVehiculos();
                    opcionSeleccionada=5;
                    break;
                    case 5 : console.log("Saliendo...");
                    break;
                    default: console.log("Error de Datos");
                }
        } while(opcionSeleccionada!==5);      
    }

    mostrarDetalleAuto(a:Auto){
        console.log(`Auto \n Marca: ${a.getMarca()}. \n Modelo: ${a.getModelo()}. \n Patente: ${a.getPatente()}. \n Año: ${a.getAnioDeFabricacion()}. \n Cantidad de Puertas: ${a.getCantidadDePuertas()}. \n ------------------------ `);
    }

    mostrarDetalleMoto(m:Moto){
        console.log(`Moto \n Marca: ${m.getMarca()}. \n Modelo: ${m.getModelo()}. \n Patente: ${m.getPatente()}. \n Año: ${m.getAnioDeFabricacion()}. \n Cantidad de Puertas: ${m.getCilindrada()}. \n ------------------------ `);
    }

    mostrarDetalleCamion(c:Camion){
        console.log(`Camion \n Marca: ${c.getMarca()}. \n Modelo: ${c.getModelo()}. \n Patente: ${c.getPatente()}. \n Año: ${c.getAnioDeFabricacion()}. \n Cantidad de Puertas: ${c.getCapacidadDeCarga()}. \n ------------------------ `);
    }
    
    modificarVehiculo():void{
        let opcionSeleccionada : number ;
        do{
        console.log(`Que tipo de Vehiculo desea modificar  \n 1 - Auto. \n 2 - Moto. \n 3 - Camion. \n 4 - Salir`);
        opcionSeleccionada = rls.questionInt("Ingrese la Opcion que Desee: ");
            while (opcionSeleccionada<1 || opcionSeleccionada>4){
                opcionSeleccionada = rls.questionInt("Seleccione \n 1 - Auto. \n 2 - Moto. \n 3 - Camion. \n 4 - Salir ");
            }
            
                switch (opcionSeleccionada){
                    case 1 : this.modificarAuto();
                    opcionSeleccionada=4;
                    break;
                    case 2 : this.modificarMoto();
                    opcionSeleccionada=4;
                    break;
                    case 3 : this.modificarCamion();
                    opcionSeleccionada=4;
                    break;
                    case 4 : console.log("Saliendo...");
                    break;
                    default: console.log("Error de Datos");
                }
        } while(opcionSeleccionada!==4); 
    }

    modificarAuto():void{
        let patenteAuto: string = rls.question("Ingrese la Patente del vehiculo: ");
        let autoSeleccionado : Auto | undefined= this.listaAutos.find(auto => auto.getPatente() === patenteAuto);
        if (autoSeleccionado){
            this.mostrarDetalleAuto(autoSeleccionado);
            let nuevaMarca: string = rls.question("Ingrese nueva marca (o presione Enter para no modificar): ");
            let nuevoModelo: string = rls.question("Ingrese nuevo modelo (o presione Enter para no modificar): ");
            let nuevoAnio: number = rls.questionInt("Ingrese nuevo año (o 0 para no modificar): ");
            let nuevoCantPuertas : number = rls.questionInt("Ingrese cantidad de puertas (o 0 para no modificar): ");

            if (nuevaMarca) {
                autoSeleccionado.setMarca(nuevaMarca);
            }
            if (nuevoModelo) {
                autoSeleccionado.setModelo(nuevoModelo);
            }
            if (nuevoAnio !== 0) {
                autoSeleccionado.setAnioDeFabricacion(nuevoAnio);
            }
            if (nuevoCantPuertas !== 0) {
                autoSeleccionado.setCantidadDePuertas(nuevoCantPuertas);
            }
            console.log("Auto Modificado Correctamente");
            this.esperarEnter();
            
        }else{
            console.log("No existe Auto con esa Patente");
            this.esperarEnter();
        }
    }
    modificarMoto():void{
        let patenteMoto: string = rls.question("Ingrese la Patente del vehiculo: ");
        let motoSeleccionada : Moto | undefined= this.listaMotos.find(moto => moto.getPatente() === patenteMoto);
        if (motoSeleccionada){
            this.mostrarDetalleMoto(motoSeleccionada);
            let nuevaMarca: string = rls.question("Ingrese nueva marca (o presione Enter para no modificar): ");
            let nuevoModelo: string = rls.question("Ingrese nuevo modelo (o presione Enter para no modificar): ");
            let nuevoAnio: number = rls.questionInt("Ingrese nuevo año (o 0 para no modificar): ");
            let nuevoCilindrada : number = rls.questionInt("Ingrese cilindrada (o 0 para no modificar): ");

            if (nuevaMarca) {
                motoSeleccionada.setMarca(nuevaMarca);
            }
            if (nuevoModelo) {
                motoSeleccionada.setModelo(nuevoModelo);
            }
            if (nuevoAnio !== 0) {
                motoSeleccionada.setAnioDeFabricacion(nuevoAnio);
            }
            if (nuevoCilindrada !== 0) {
                motoSeleccionada.setCilindrada(nuevoCilindrada);
            }
            console.log("Moto Modificada Correctamente");
            this.esperarEnter();
            
        }else{
            console.log("No existe Moto con esa Patente");
            this.esperarEnter();
        }
    }
    modificarCamion():void{
        let patenteCamion: string = rls.question("Ingrese la Patente del vehiculo: ");
        let camionSeleccionado : Camion | undefined= this.listaCamiones.find(camion => camion.getPatente() === patenteCamion);
        if (camionSeleccionado){
            this.mostrarDetalleCamion(camionSeleccionado);
            let nuevaMarca: string = rls.question("Ingrese nueva marca (o presione Enter para no modificar): ");
            let nuevoModelo: string = rls.question("Ingrese nuevo modelo (o presione Enter para no modificar): ");
            let nuevoAnio: number = rls.questionInt("Ingrese nuevo año (o 0 para no modificar): ");
            let nuevoCapacidadDeCarga : number = rls.questionInt("Ingrese cilindrada (o 0 para no modificar): ");

            if (nuevaMarca) {
                camionSeleccionado.setMarca(nuevaMarca);
            }
            if (nuevoModelo) {
                camionSeleccionado.setModelo(nuevoModelo);
            }
            if (nuevoAnio !== 0) {
                camionSeleccionado.setAnioDeFabricacion(nuevoAnio);
            }
            if (nuevoCapacidadDeCarga !== 0) {
                camionSeleccionado.setCapacidadDeCarga(nuevoCapacidadDeCarga);
            }
            console.log("Camion Modificado Correctamente");
            this.esperarEnter();
            
        }else{
            console.log("No existe Camion con esa Patente");
            this.esperarEnter();
        }
    }

    eliminarVehiculo():void{
        let opcionSeleccionada : number ;
        do{
        console.log(`Que tipo de Vehiculo desea eliminar  \n 1 - Auto. \n 2 - Moto. \n 3 - Camion. \n 4 - Salir`);
        opcionSeleccionada = rls.questionInt("Ingrese la Opcion que Desee: ");
            while (opcionSeleccionada<1 || opcionSeleccionada>4){
                opcionSeleccionada = rls.questionInt("Seleccione \n 1 - Auto. \n 2 - Moto. \n 3 - Camion. \n 4 - Salir ");
            }
            
                switch (opcionSeleccionada){
                    case 1 : this.eliminarAuto();
                    opcionSeleccionada=4;
                    break;
                    case 2 : this.eliminarMoto();
                    opcionSeleccionada=4;
                    break;
                    case 3 : this.eliminarCamion();
                    opcionSeleccionada=4;
                    break;
                    case 4 : console.log("Saliendo...");
                    break;
                    default: console.log("Error de Datos");
                }
        } while(opcionSeleccionada!==4);
    }

    eliminarAuto():void{
        let patenteAuto: string = rls.question("Ingrese la Patente del Auto: ");
        let autoSeleccionado : Auto | undefined= this.listaAutos.find(auto => auto.getPatente() === patenteAuto);
        if (autoSeleccionado){
            this.mostrarDetalleAuto(autoSeleccionado);
            console.log("Seguro que desea Eliminar? \n ingrese 1 si esta seguro \n ingrese 2 para regresar sin eliminar:");
            let seguro:number = rls.questionInt("")
            if (seguro===1){
                this.listaAutos = this.listaAutos.filter((a) => a !== autoSeleccionado);
                console.log("Auto Eliminado con Exito")
                this.esperarEnter();
            }
        }else{
            console.log("No existe Auto con esa Patente");
        }
    }

    eliminarMoto():void{
        let patenteMoto: string = rls.question("Ingrese la Patente de la Moto: ");
        let motoSeleccionada : Moto | undefined= this.listaMotos.find(moto => moto.getPatente() === patenteMoto);
        if (motoSeleccionada){
            this.mostrarDetalleMoto(motoSeleccionada);
            console.log("Seguro que desea Eliminar? \n ingrese 1 si esta seguro \n ingrese 2 para regresar sin eliminar:");
            let seguro:number = rls.questionInt("")
            if (seguro===1){
                this.listaMotos = this.listaMotos.filter((m) => m !== motoSeleccionada);
                console.log("Moto Eliminada con Exito")
                this.esperarEnter();
            }
        }else{
            console.log("No existe Moto con esa Patente");
        }
    }

    eliminarCamion():void{
        let patenteCamion: string = rls.question("Ingrese la Patente del Camion: ");
        let camionSeleccionado : Camion | undefined= this.listaCamiones.find(camion => camion.getPatente() === patenteCamion);
        if (camionSeleccionado){
            this.mostrarDetalleCamion(camionSeleccionado);
            console.log("Seguro que desea Eliminar? \n ingrese 1 si esta seguro \n ingrese 2 para regresar sin eliminar:");
            let seguro:number = rls.questionInt("")
            if (seguro===1){
                this.listaCamiones = this.listaCamiones.filter((c) => c !== camionSeleccionado);
                console.log("Camion Eliminado con Exito")
                this.esperarEnter();
            }
        }else{
            console.log("No existe Camion con esa Patente");
        }
    }

    esperarEnter():void{
        console.log("Presione Enter Para continuar");
        rls.question('');
    }
}