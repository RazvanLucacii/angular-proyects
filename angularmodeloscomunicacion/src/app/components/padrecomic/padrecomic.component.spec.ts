import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrecomicComponent } from './padrecomic.component';

describe('PadrecomicComponent', () => {
  let component: PadrecomicComponent;
  let fixture: ComponentFixture<PadrecomicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadrecomicComponent]
    });
    fixture = TestBed.createComponent(PadrecomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
