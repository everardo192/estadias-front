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

  async obtenerUnaSolicitud(id:string){
    try {
      const {data} = await clienteAxios.get('solicitud/one/'+id);
      return data;
    } catch (error) {
      console.log("Error desde Angular");
    }
  }

  async editarDolicitud(id:string,solicitud:any){
    try {
      const { data } = await clienteAxios.put('/solicitud/edit/'+id,solicitud);
      console.log(data);
      return data;
    }catch(error){
      console.log("Error Agular");
    }
  }

  async borraSolicitud(id:string){
    try {
      const { data } = await clienteAxios.delete('/solicitud/delete/'+id);
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error en angular");
    }
  }
}
