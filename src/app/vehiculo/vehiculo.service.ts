import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl: string = environment.baseUrl+'202212_MISW4104_Grupo1.json';

  constructor(private http:HttpClient) { }

  getVehiculos():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }
}
