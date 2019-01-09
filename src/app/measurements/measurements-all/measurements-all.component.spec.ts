import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsAllComponent } from './measurements-all.component';

describe('MeasurementsAllComponent', () => {
  let component: MeasurementsAllComponent;
  let fixture: ComponentFixture<MeasurementsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
