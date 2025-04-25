import { Component } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  standalone: false,
  templateUrl: './vehiculo-list.component.html',
  styleUrl: './vehiculo-list.component.css'
})
export class VehiculoListComponent {

  vehiculos: Array<Vehiculo>=[];
  vehiculosMarca:{[marca:string]:number}={};

  constructor(private vehiculoService:VehiculoService){}

  getVehiculos():void{
    this.vehiculoService.getVehiculos().subscribe((data) => {
      this.vehiculos  = data;
      this.contarVehiculosPorMarca();
    });
  }

  contarVehiculosPorMarca(): void {
    this.vehiculos.forEach(vehiculo => {
      if (this.vehiculosMarca[vehiculo.marca]) {
        this.vehiculosMarca[vehiculo.marca]++;
      } else {
        this.vehiculosMarca[vehiculo.marca] = 1;
      }
    });
  }

  ngOnInit(){
    this.getVehiculos()
  }

}
