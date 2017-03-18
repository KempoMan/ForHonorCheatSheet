import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuraiKenseiComponent } from './samurai-kensei.component';

describe('SamuraiKenseiComponent', () => {
  let component: SamuraiKenseiComponent;
  let fixture: ComponentFixture<SamuraiKenseiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamuraiKenseiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuraiKenseiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
