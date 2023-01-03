import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedTopbarComponent } from './stacked-topbar.component';

describe('StackedTopbarComponent', () => {
  let component: StackedTopbarComponent;
  let fixture: ComponentFixture<StackedTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackedTopbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StackedTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
