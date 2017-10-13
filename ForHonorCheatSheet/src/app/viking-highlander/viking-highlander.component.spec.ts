import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VikingHighlanderComponent } from './viking-highlander.component';

describe('VikingHighlanderComponent', () => {
  let component: VikingHighlanderComponent;
  let fixture: ComponentFixture<VikingHighlanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VikingHighlanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VikingHighlanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
