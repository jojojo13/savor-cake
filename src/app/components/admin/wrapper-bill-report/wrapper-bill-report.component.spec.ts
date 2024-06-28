import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperBillReportComponent } from './wrapper-bill-report.component';

describe('WrapperBillReportComponent', () => {
  let component: WrapperBillReportComponent;
  let fixture: ComponentFixture<WrapperBillReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperBillReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperBillReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
