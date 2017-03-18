import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuraiShugokiComponent } from './samurai-shugoki.component';

describe('SamuraiShugokiComponent', () => {
  let component: SamuraiShugokiComponent;
  let fixture: ComponentFixture<SamuraiShugokiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamuraiShugokiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuraiShugokiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
