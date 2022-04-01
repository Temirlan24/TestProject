import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-calculator',
  templateUrl: './credit-calculator.component.html',
  styleUrls: ['./credit-calculator.component.css']
})
export class CreditCalculatorComponent implements OnInit {
  bufferValue = 75;
  step = 1000;
  minAmount = 10000;
  maxAmount = 1500000;
  amount: number;
  constructor() { }

  ngOnInit(): void {
    this.amount = this.minAmount;
  }
  onAmountChange(value: number){
    this.amount = value;
  }
}
