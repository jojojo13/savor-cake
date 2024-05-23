import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeAccessoryComponent } from './cake-accessory.component';

describe('CakeAccessoryComponent', () => {
  let component: CakeAccessoryComponent;
  let fixture: ComponentFixture<CakeAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeAccessoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
