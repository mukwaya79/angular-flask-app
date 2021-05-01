import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwellborecoreComponent } from './viewwellborecore.component';

describe('ViewwellborecoreComponent', () => {
  let component: ViewwellborecoreComponent;
  let fixture: ComponentFixture<ViewwellborecoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewwellborecoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwellborecoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
