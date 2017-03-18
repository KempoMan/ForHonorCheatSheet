import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightPeacekeeperComponent } from './knight-peacekeeper.component';

describe('KnightPeacekeeperComponent', () => {
  let component: KnightPeacekeeperComponent;
  let fixture: ComponentFixture<KnightPeacekeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightPeacekeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightPeacekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
