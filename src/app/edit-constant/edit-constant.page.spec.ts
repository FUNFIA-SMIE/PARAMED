import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditConstantPage } from './edit-constant.page';

describe('EditConstantPage', () => {
  let component: EditConstantPage;
  let fixture: ComponentFixture<EditConstantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConstantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
