import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijocomicComponent } from './hijocomic.component';

describe('HijocomicComponent', () => {
  let component: HijocomicComponent;
  let fixture: ComponentFixture<HijocomicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HijocomicComponent]
    });
    fixture = TestBed.createComponent(HijocomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
