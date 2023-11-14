import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadredeporteComponent } from './padredeporte.component';

describe('PadredeporteComponent', () => {
  let component: PadredeporteComponent;
  let fixture: ComponentFixture<PadredeporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadredeporteComponent]
    });
    fixture = TestBed.createComponent(PadredeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
