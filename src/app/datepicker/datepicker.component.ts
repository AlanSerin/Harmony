import { afterRender, Component, ElementRef } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
})
export class DatepickerComponent {
  constructor(elementRef: ElementRef) {
    console.log(elementRef.nativeElement);

    afterRender(() => {
      // Focus the first input element in this component.
      const dateInput = elementRef.nativeElement.querySelector('input');
      flatpickr(dateInput, {
        // flatpickr options
        inline: true,
      });
    });
  }
}
