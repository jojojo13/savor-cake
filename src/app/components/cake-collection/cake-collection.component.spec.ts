import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeCollectionComponent } from './cake-collection.component';

describe('CakeCollectionComponent', () => {
  let component: CakeCollectionComponent;
  let fixture: ComponentFixture<CakeCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
