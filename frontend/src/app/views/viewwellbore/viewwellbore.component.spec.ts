import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwellboreComponent } from './viewwellbore.component';

describe('ViewwellboreComponent', () => {
  let component: ViewwellboreComponent;
  let fixture: ComponentFixture<ViewwellboreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewwellboreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwellboreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
