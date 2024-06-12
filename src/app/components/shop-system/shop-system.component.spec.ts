import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSystemComponent } from './shop-system.component';

describe('ShopSystemComponent', () => {
  let component: ShopSystemComponent;
  let fixture: ComponentFixture<ShopSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
