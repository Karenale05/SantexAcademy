import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  corDatServ: string = '';
  pasDatServ: string = '';
  aliDatServ: string = '';
  nomDatServ: string = '';
  apeDatServ: string = '';
  dniDatServ: string = '';
  locDatServ: string = '';
  dirDatServ: string = '';

  idProv: string = '';


  constructor(private apiService: ApiService) { }

  datosUsuario(
    corDatServ: string, 
    pasDatServ: string, 
    aliDatServ: string, 
    nomDatServ: string, 
    apeDatServ: string,
    dniDatServ: string,
    locDatServ: string,
    dirDatServ: string) {
    const body = {
      firstName: nomDatServ,
      lastName: apeDatServ,
      dni: dniDatServ,
      mail: corDatServ,
      password: pasDatServ,
      alias: aliDatServ,
      idLocalidad: locDatServ,
      calleYAltura: dirDatServ
    }
    console.log(body);
    return this.apiService.post('/users/user-register', body)
  }

  datoosUsuario(idUser: number) {
    const id= idUser;
    return this.apiService.get<any>('/user/' + id)
  }

  getProvincias() {
    return this.apiService.get<any>('/direccion/provincias');
  }

  getLocalidades(idProv: string) {
    return this.apiService.get<any>('/direccion/localidades/' + idProv);
  }
}

