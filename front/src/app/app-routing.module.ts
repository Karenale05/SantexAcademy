import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './Shared/barra/barra.component';
import { HomePageComponent } from './Features/home-page/home-page.component';
import { BasesComponent } from './Features/bases/bases.component';
import { RegistroComponent } from './Features/registro/registro.component';
import { CargaArticulosComponent } from './Features/carga-articulos/carga-articulos.component';
import { TarjetaArticuloComponent } from './Features/tarjeta-articulo/tarjeta-articulo.component';
import { VistaArtIndComponent } from './Features/vista-articulo-ind/vista-articulo-ind.component';
import { ConfirmacionCompraComponent } from './Features/confirmacion-compra/confirmacion-compra.component';


const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: '',
    component: HomePageComponent
  }, 
  {
  path: 'bases',
  component: BasesComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'carga-articulos',
    component: CargaArticulosComponent
  },
  {
    path: 'tarjeta',
    component: TarjetaArticuloComponent
  },
  {
    path: 'vista-articulo',
    component: VistaArtIndComponent,
  },
  {
    path: 'confirmacion-articulo',
    component: ConfirmacionCompraComponent,
  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
