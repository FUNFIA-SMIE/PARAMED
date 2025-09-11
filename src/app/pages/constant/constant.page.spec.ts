import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConstantPage } from './constant.page';

describe('ConstantPage', () => {
  let component: ConstantPage;
  let fixture: ComponentFixture<ConstantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
