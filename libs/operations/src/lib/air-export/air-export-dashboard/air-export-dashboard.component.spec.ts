import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportDashboardComponent } from './air-export-dashboard.component';

describe('AirExportDashboardComponent', () => {
  let component: AirExportDashboardComponent;
  let fixture: ComponentFixture<AirExportDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirExportDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirExportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
