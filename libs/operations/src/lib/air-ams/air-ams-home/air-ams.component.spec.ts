import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAmsComponent } from './air-ams.component';

describe('AirAmsComponent', () => {
  let component: AirAmsComponent;
  let fixture: ComponentFixture<AirAmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirAmsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirAmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
