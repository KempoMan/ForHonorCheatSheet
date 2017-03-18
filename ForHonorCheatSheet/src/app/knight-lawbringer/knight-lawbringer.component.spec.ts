import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightLawbringerComponent } from './knight-lawbringer.component';

describe('KnightLawbringerComponent', () => {
  let component: KnightLawbringerComponent;
  let fixture: ComponentFixture<KnightLawbringerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightLawbringerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightLawbringerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
