import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsHomeComponent } from './patients-home.component';

describe('PatientsHomeComponent', () => {
  let component: PatientsHomeComponent;
  let fixture: ComponentFixture<PatientsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
