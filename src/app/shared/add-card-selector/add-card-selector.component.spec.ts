import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardSelectorComponent } from './add-card-selector.component';

describe('AddCardSelectorComponent', () => {
  let component: AddCardSelectorComponent;
  let fixture: ComponentFixture<AddCardSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCardSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCardSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
