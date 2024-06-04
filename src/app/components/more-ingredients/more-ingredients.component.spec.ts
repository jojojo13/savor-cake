import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIngredientsComponent } from './more-ingredients.component';

describe('MoreIngredientsComponent', () => {
  let component: MoreIngredientsComponent;
  let fixture: ComponentFixture<MoreIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
