import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightWardenComponent } from './knight-warden.component';

describe('KnightWardenComponent', () => {
  let component: KnightWardenComponent;
  let fixture: ComponentFixture<KnightWardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightWardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightWardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
