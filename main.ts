import * as rls from 'readline-sync';
import { RegistroAutomotor } from "./RegistroAutomotor";

const registroOlavarria = new RegistroAutomotor("Registro Olavarria");
let opcionSeleccionada : number;
do {
console.log(`Ingrese la opcion Deseada \n 1 - Agregar Vehiculo \n 2 - Ver Vehiculos \n 3 - Modificar un Vehiculo \n 4 - Eliminar Vehiculo \n 5 - Salir`);
        opcionSeleccionada = rls.questionInt("Ingrese la Opcion que Desee: ");
            while (opcionSeleccionada<1 || opcionSeleccionada>5){
                opcionSeleccionada = rls.questionInt("Seleccione el numero que figura en la opcion: \n 1 - Agregar. \n 2 - Ver. \n 3 - Modificar. \n 4 - Eliminar. \n 5 - Salir ");
            }
            
                switch (opcionSeleccionada){
                    case 1 : registroOlavarria.agregarVehiculo();
                    break;
                    case 2 : registroOlavarria.verVehiculos();
                    break;
                    case 3 : registroOlavarria.modificarVehiculo();
                    break;
                    case 4 : registroOlavarria.eliminarVehiculo();
                    break;
                    case 5 : console.log("Saliendo...");
                    break;
                    default: console.log("Error de Datos");
                }
            
        }while(opcionSeleccionada!==5);

//registroOlavarria.agregarVehiculo();

//registroOlavarria.listarVehiculos();