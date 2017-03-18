import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightConquerorComponent } from './knight-conqueror.component';

describe('KnightConquerorComponent', () => {
  let component: KnightConquerorComponent;
  let fixture: ComponentFixture<KnightConquerorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightConquerorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightConquerorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
