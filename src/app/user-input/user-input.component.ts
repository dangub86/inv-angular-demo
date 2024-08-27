import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from './investment-data-model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';
  @Output() data = new EventEmitter<InvestmentData>();

  onSubmit() {
    console.log("form submitted");
    console.log("" + this.initialInvestment + "-" + this.annualInvestment + "-" + this.expectedReturn + "-" + this.duration);
    this.data.emit({
      initialInvestment: +this.initialInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment
    });
  }

}
