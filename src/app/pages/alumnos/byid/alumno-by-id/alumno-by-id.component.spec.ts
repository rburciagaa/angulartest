import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoByIdComponent } from './alumno-by-id.component';

describe('AlumnoByIdComponent', () => {
  let component: AlumnoByIdComponent;
  let fixture: ComponentFixture<AlumnoByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
