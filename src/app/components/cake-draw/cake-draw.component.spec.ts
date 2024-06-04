import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDrawComponent } from './cake-draw.component';

describe('CakeDrawComponent', () => {
  let component: CakeDrawComponent;
  let fixture: ComponentFixture<CakeDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeDrawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
