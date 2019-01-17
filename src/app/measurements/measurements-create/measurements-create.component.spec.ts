import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsCreateComponent } from './measurements-create.component';

describe('MeasurementsCreateComponent', () => {
  let component: MeasurementsCreateComponent;
  let fixture: ComponentFixture<MeasurementsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
