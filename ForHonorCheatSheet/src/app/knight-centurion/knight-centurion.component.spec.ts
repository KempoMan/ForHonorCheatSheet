import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightCenturionComponent } from './knight-centurion.component';

describe('KnightCenturionComponent', () => {
  let component: KnightCenturionComponent;
  let fixture: ComponentFixture<KnightCenturionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightCenturionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightCenturionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
