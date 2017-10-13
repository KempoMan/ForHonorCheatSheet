import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuraiShinobiComponent } from './samurai-shinobi.component';

describe('SamuraiShinobiComponent', () => {
  let component: SamuraiShinobiComponent;
  let fixture: ComponentFixture<SamuraiShinobiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamuraiShinobiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuraiShinobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
