import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuraiOrochiComponent } from './samurai-orochi.component';

describe('SamuraiOrochiComponent', () => {
  let component: SamuraiOrochiComponent;
  let fixture: ComponentFixture<SamuraiOrochiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamuraiOrochiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuraiOrochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
