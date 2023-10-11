import { Component, OnInit } from '@angular/core';
import { DatosUsuarioService } from 'src/app/core/services/datos-usuario.service';
import { MensajeService } from 'src/app/core/services/mensaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {  
  idUser: string = '';

  emailUsuario: string = '';
  contraseniaUsuario: string = '';
  aliasUsuario: string = '';
  nombreUsuario: string = '';
  apellidosUsuario: string = '';
  dniUsuario: string = '';
  
  provinciaUsuario: string = '';
  localidadUsuario: string = '';
  direccionUsuario: string = '';

  mensajeDatosUsuario: string = '';

  constructor(private service: DatosUsuarioService, private mensajeService: MensajeService, private router: Router) { }

  ngOnInit(): void {
    this.getIdUsuario()

    this.service.getDatosUsuario(this.idUser).subscribe(usuario => { console.log(usuario);

    this.emailUsuario = usuario.mail
    this.contraseniaUsuario = usuario.password
    this.aliasUsuario = usuario.alias
    this.nombreUsuario = usuario.firstName
    this.apellidosUsuario = usuario.lastName
    this.dniUsuario = usuario.dni
    this.provinciaUsuario = usuario.direccion.localidad.provincium.nombre
    this.localidadUsuario = usuario.direccion.localidad.nombre
    this.direccionUsuario = usuario.direccion.calleYaltura
    });

  }

  getIdUsuario() {    
    let infoLocal = localStorage.getItem('resLog')
    if (infoLocal) {
      let newObject = JSON.parse(infoLocal);
      if (newObject) {
        this.idUser = newObject[1].users.id
        console.log(this.idUser);
        
      }
    }
  }

  EditarUsuario() {
    // Puedes ajustar la ruta a donde quieras redirigir
    this.router.navigate(['/editar-usuario']);
  }
  
} 
