import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeCollectionItemComponent } from './cake-collection-item.component';

describe('CakeCollectionItemComponent', () => {
  let component: CakeCollectionItemComponent;
  let fixture: ComponentFixture<CakeCollectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeCollectionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
