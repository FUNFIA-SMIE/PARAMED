import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientPecPage } from './patient-pec.page';

describe('PatientPecPage', () => {
  let component: PatientPecPage;
  let fixture: ComponentFixture<PatientPecPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
