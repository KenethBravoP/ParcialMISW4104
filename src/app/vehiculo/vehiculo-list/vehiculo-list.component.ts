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

  constructor(private vehiculoService:VehiculoService){}

  getVehiculos():void{
    this.vehiculoService.getVehiculos().subscribe((data) => {
      this.vehiculos  = data;
    });
 

  }

  ngOnInit(){
    this.getVehiculos()
  }

}
