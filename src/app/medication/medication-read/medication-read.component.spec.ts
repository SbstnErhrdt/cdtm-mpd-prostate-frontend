import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationReadComponent } from './medication-read.component';

describe('MedicationReadComponent', () => {
  let component: MedicationReadComponent;
  let fixture: ComponentFixture<MedicationReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
