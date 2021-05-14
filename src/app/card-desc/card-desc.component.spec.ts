import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDescComponent } from './card-desc.component';

describe('CardDescComponent', () => {
  let component: CardDescComponent;
  let fixture: ComponentFixture<CardDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
