import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOpenComponent } from './card-open.component';

describe('CardOpenComponent', () => {
  let component: CardOpenComponent;
  let fixture: ComponentFixture<CardOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOpenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
