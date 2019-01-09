import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationAllComponent } from './medication-all.component';

describe('MedicationAllComponent', () => {
  let component: MedicationAllComponent;
  let fixture: ComponentFixture<MedicationAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
