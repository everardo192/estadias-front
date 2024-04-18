import { Injectable } from '@angular/core';
import { clienteAxios } from "../helpers/setState"
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor() { }

  async reistrarEmpresa(empresa:any){
    try {
      const { data } = await clienteAxios.post('/empresa/add',empresa);
      console.log(data)
      return data;
    }catch(error){
      console.log("Error :"+error);
    }
  }
  //
}
