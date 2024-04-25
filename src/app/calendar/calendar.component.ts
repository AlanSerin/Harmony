import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { DatepickerComponent } from '../datepicker/datepicker.component';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule, DatepickerComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'title',
      center: 'dayGridMonth,dayGridWeek,timeGridDay,listWeek',
      right: 'prev,today,next',
    },
    dateClick: (arg) => this.handleDateClick(arg),
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
    events: [{ title: 'Meeting', start: new Date() }],
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }
}