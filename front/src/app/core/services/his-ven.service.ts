import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class HisVenService {

  constructor(private service: ApiService) { }
  articulosVendedor(id: number) {
    return this.service.get<any>('/productos/productos-por-vendedor/' + id)
  }
  infoVendedor(id: number) {
    return this.service.get<any>('/users/' + id)
  }
  getCategories() {
    return this.service.get<any>('/productos/categories')
  }
  eliminarArticulo(id: number) {
    return this.service.delete<any>('productos/eliminar-articulo/' + id)
  }
}
