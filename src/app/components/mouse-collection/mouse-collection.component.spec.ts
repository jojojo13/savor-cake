import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseCollectionComponent } from './mouse-collection.component';

describe('MouseCollectionComponent', () => {
  let component: MouseCollectionComponent;
  let fixture: ComponentFixture<MouseCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
