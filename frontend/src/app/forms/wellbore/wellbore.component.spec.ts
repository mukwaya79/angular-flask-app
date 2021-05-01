import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellboreComponent } from './wellbore.component';

describe('WellboreComponent', () => {
  let component: WellboreComponent;
  let fixture: ComponentFixture<WellboreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellboreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellboreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
