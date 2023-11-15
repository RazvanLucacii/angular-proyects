import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillasapiComponent } from './plantillasapi.component';

describe('PlantillasapiComponent', () => {
  let component: PlantillasapiComponent;
  let fixture: ComponentFixture<PlantillasapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantillasapiComponent]
    });
    fixture = TestBed.createComponent(PlantillasapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
