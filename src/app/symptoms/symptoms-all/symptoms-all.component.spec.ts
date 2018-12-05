import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsAllComponent } from './symptoms-all.component';

describe('SymptomsAllComponent', () => {
  let component: SymptomsAllComponent;
  let fixture: ComponentFixture<SymptomsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
