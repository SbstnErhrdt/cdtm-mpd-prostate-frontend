import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationButtonComponent } from './medication-button.component';

describe('MedicationButtonComponent', () => {
  let component: MedicationButtonComponent;
  let fixture: ComponentFixture<MedicationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
