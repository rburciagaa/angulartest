import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoUpdateComponent } from './alumno-update.component';

describe('AlumnoUpdateComponent', () => {
  let component: AlumnoUpdateComponent;
  let fixture: ComponentFixture<AlumnoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
