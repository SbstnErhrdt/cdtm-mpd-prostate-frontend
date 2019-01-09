import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiAllComponent } from './wiki-all.component';

describe('WikiAllComponent', () => {
  let component: WikiAllComponent;
  let fixture: ComponentFixture<WikiAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
