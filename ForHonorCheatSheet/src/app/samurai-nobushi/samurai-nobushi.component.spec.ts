import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuraiNobushiComponent } from './samurai-nobushi.component';

describe('SamuraiNobushiComponent', () => {
  let component: SamuraiNobushiComponent;
  let fixture: ComponentFixture<SamuraiNobushiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamuraiNobushiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuraiNobushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
