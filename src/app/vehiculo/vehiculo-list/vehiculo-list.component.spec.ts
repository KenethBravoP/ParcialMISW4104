import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VehiculoListComponent],
      providers: [ VehiculoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        faker.number.int({ min: 1, max: 1000 }),        
        faker.vehicle.manufacturer(),                    
        faker.vehicle.model(),                           
        faker.vehicle.type(),                            
        faker.number.int({ min: 2000, max: 2024 }),      
        faker.number.int({ min: 10000, max: 200000 }),   
        faker.color.human(),                             
        faker.image.urlPicsumPhotos()                    
      );
      component.vehiculos.push(vehiculo);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("El componente tenga una tabla", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it('Deberia crear una tabla con 3 vehiculos rmas el la fila de header', () => {
    const rows = fixture.debugElement.queryAll(By.css('table tr'));
    expect(rows.length).toBe(4);
  });
 
});
