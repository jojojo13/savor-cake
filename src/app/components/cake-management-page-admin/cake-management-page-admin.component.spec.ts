import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeManagementPageAdminComponent } from './cake-management-page-admin.component';

describe('CakeManagementPageAdminComponent', () => {
  let component: CakeManagementPageAdminComponent;
  let fixture: ComponentFixture<CakeManagementPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeManagementPageAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeManagementPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
