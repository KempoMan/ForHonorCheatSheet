import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightGladiatorComponent } from './knight-gladiator.component';

describe('KnightGladiatorComponent', () => {
  let component: KnightGladiatorComponent;
  let fixture: ComponentFixture<KnightGladiatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightGladiatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightGladiatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
