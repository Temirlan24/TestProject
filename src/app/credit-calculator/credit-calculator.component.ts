import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-calculator',
  templateUrl: './credit-calculator.component.html',
  styleUrls: ['./credit-calculator.component.css']
})
export class CreditCalculatorComponent implements OnInit {
  stepMonth = 1;
  minMonths = 6;
  maxMonths = 84;
  amountMonth: number;
  newAmountMonth: string;
  items = [
    {value: 30, label: 'тыс.'},
    {value: 1.9, label: 'млн.'},
    {value: 3.6, label: 'млн.'},
    {value: 5.2, label: 'млн.'},
    {value: 7, label: 'млн.'}
  ];
  months = [
    {value: 6, label: 'мес.'},
    {value: 26, label: 'мес.'},
    {value: 44, label: 'мес.'},
    {value: 63, label: 'мес.'},
    {value: 84, label: 'мес.'}];
  step = 10000;
  minAmount = 30000;
  maxAmount = 7000000;
  amount: number;
  interestRate = 15.9;
  monthPayment:number;
  constructor() {
  }

  ngOnInit(): void {
    this.amount = this.minAmount;
    this.amountMonth = this.minMonths;
    this.newAmountMonth = this.amountMonth + ' мес.'
    this.calculateCredit();
  }
  onMoneyChange(event: any){
    this.amount = event.target.value;
    setTimeout(()=>{
      this.calculateCredit();
    },1000);
  }
  onChangeMonth(event: any){
    this.amountMonth = event.target.value;
    if(this.amountMonth>12){
      const year = Math.floor(this.amountMonth/12);
      const month = this.amountMonth%12;
      if(year == 1){
        this.newAmountMonth = year + ' год '+month+' мес.';
      }
      else {
        this.newAmountMonth = year + ' года '+month+' мес.';
      }
    }
    else{
      this.newAmountMonth = this.amountMonth + ' мес.';
    }
    setTimeout(()=>{
      this.calculateCredit();
    },1000);
  }
  calculateCredit(){
    const p = (this.interestRate/100)/12;
    this.monthPayment =Math.ceil(this.amount*(p+(p/((1+p)^this.amountMonth-1))));
    console.log("payment", this.monthPayment);
  }
}
