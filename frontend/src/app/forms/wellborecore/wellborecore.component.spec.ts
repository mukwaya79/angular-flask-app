import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellborecoreComponent } from './wellborecore.component';

describe('WellborecoreComponent', () => {
  let component: WellborecoreComponent;
  let fixture: ComponentFixture<WellborecoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellborecoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellborecoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
