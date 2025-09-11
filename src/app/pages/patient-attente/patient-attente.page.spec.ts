import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientAttentePage } from './patient-attente.page';

describe('PatientAttentePage', () => {
  let component: PatientAttentePage;
  let fixture: ComponentFixture<PatientAttentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAttentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
