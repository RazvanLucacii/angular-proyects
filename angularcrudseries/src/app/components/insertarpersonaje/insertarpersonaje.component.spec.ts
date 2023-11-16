import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarpersonajeComponent } from './insertarpersonaje.component';

describe('InsertarpersonajeComponent', () => {
  let component: InsertarpersonajeComponent;
  let fixture: ComponentFixture<InsertarpersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarpersonajeComponent]
    });
    fixture = TestBed.createComponent(InsertarpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
