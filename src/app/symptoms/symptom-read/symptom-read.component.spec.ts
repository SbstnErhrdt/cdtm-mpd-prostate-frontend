import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomReadComponent } from './symptom-read.component';

describe('SymptomReadComponent', () => {
  let component: SymptomReadComponent;
  let fixture: ComponentFixture<SymptomReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
