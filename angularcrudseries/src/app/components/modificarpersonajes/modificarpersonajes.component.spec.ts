import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpersonajesComponent } from './modificarpersonajes.component';

describe('ModificarpersonajesComponent', () => {
  let component: ModificarpersonajesComponent;
  let fixture: ComponentFixture<ModificarpersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarpersonajesComponent]
    });
    fixture = TestBed.createComponent(ModificarpersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
