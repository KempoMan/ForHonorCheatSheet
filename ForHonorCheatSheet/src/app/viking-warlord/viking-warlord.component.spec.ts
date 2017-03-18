import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VikingWarlordComponent } from './viking-warlord.component';

describe('VikingWarlordComponent', () => {
  let component: VikingWarlordComponent;
  let fixture: ComponentFixture<VikingWarlordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VikingWarlordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VikingWarlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
