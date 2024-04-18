import { Injectable } from '@angular/core';
import { clienteAxios } from "../helpers/setState"

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor() { }

  async crearSolicitud(solicitud:any){
    try {
      const { data } = await clienteAxios.post('/solicitud/add',solicitud);
      console.log(data);
      return data;
    }catch(error){
      console.log("Error Agular");
    }
  }

  // listar solicitudes por nnombre de empresa
  async listarSolicitudesEmpresa(nombreEmp:string){
    try {
      const { data } = await clienteAxios.post('/solicitud/list',nombreEmp);
      console.log(data);
      return data;
    }catch(error){
      console.log("Error Agular");
    }
  }
}
