import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LagerComponent} from './lager.component';

describe('LagerComponent', () => {
  let component: LagerComponent;
  let fixture: ComponentFixture<LagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LagerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
