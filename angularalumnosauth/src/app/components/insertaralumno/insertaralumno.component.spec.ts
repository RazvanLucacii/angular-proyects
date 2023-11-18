import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaralumnoComponent } from './insertaralumno.component';

describe('InsertaralumnoComponent', () => {
  let component: InsertaralumnoComponent;
  let fixture: ComponentFixture<InsertaralumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertaralumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertaralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
