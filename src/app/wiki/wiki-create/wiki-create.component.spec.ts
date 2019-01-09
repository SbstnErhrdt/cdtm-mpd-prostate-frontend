import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiCreateComponent } from './wiki-create.component';

describe('WikiCreateComponent', () => {
  let component: WikiCreateComponent;
  let fixture: ComponentFixture<WikiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
