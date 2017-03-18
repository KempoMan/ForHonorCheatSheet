import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VikingBerserkerComponent } from './viking-berserker.component';

describe('VikingBerserkerComponent', () => {
  let component: VikingBerserkerComponent;
  let fixture: ComponentFixture<VikingBerserkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VikingBerserkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VikingBerserkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
