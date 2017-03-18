import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VikingValkyrieComponent } from './viking-valkyrie.component';

describe('VikingValkyrieComponent', () => {
  let component: VikingValkyrieComponent;
  let fixture: ComponentFixture<VikingValkyrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VikingValkyrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VikingValkyrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
