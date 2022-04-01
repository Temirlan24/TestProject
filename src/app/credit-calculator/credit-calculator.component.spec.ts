import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCalculatorComponent } from './credit-calculator.component';

describe('CreditCalculatorComponent', () => {
  let component: CreditCalculatorComponent;
  let fixture: ComponentFixture<CreditCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
