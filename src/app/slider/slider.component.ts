import { Component, Input,} from '@angular/core';

export interface SliderItem {
  value: number;
  label: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent{
  @Input() items: any;
}
