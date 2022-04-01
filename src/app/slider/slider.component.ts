import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent{
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();
  @Input() minLabelTemplate: TemplateRef<any>;
  @Input() maxLabelTemplate: TemplateRef<any>;
  @Input() valueLabelTemplate: TemplateRef<any>;
  onValueChange(event: MatSliderChange) {
    // this.valueChange.emit(event.value);
  }
}
