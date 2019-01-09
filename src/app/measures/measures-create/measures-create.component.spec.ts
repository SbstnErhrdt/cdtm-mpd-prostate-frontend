import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuresCreateComponent } from './measures-create.component';

describe('MeasuresCreateComponent', () => {
  let component: MeasuresCreateComponent;
  let fixture: ComponentFixture<MeasuresCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasuresCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
