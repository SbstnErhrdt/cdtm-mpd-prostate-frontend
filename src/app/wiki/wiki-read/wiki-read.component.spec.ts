import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiReadComponent } from './wiki-read.component';

describe('WikiReadComponent', () => {
  let component: WikiReadComponent;
  let fixture: ComponentFixture<WikiReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
