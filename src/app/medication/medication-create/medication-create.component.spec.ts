import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationCreateComponent } from './medication-create.component';

describe('MedicationCreateComponent', () => {
  let component: MedicationCreateComponent;
  let fixture: ComponentFixture<MedicationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
