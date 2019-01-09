import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsPatientOverviewComponent } from './doctors-patient-overview.component';

describe('DoctorsPatientOverviewComponent', () => {
  let component: DoctorsPatientOverviewComponent;
  let fixture: ComponentFixture<DoctorsPatientOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsPatientOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsPatientOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
