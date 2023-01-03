import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsqComponent } from './cmsq.component';

describe('CmsqComponent', () => {
  let component: CmsqComponent;
  let fixture: ComponentFixture<CmsqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsqComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CmsqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
