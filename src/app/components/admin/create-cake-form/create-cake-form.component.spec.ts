import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCakeFormComponent } from './create-cake-form.component';

describe('CreateCakeFormComponent', () => {
  let component: CreateCakeFormComponent;
  let fixture: ComponentFixture<CreateCakeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCakeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
