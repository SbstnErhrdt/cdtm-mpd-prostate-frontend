import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuresReadComponent } from './measures-read.component';

describe('MeasuresReadComponent', () => {
  let component: MeasuresReadComponent;
  let fixture: ComponentFixture<MeasuresReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasuresReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuresReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
