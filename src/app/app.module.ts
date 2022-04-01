import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { SliderComponent } from './slider/slider.component';
import {MatSliderModule} from '@angular/material/slider';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CreditCalculatorComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
