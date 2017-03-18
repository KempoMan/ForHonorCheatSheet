import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VikingRaiderComponent } from './viking-raider.component';

describe('VikingRaiderComponent', () => {
  let component: VikingRaiderComponent;
  let fixture: ComponentFixture<VikingRaiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VikingRaiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VikingRaiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
