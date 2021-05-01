import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwellsComponent } from './viewwells.component';

describe('ViewwellsComponent', () => {
  let component: ViewwellsComponent;
  let fixture: ComponentFixture<ViewwellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewwellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
