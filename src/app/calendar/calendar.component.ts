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
  pathName = window.location.pathname;
  filters = [
    { text: 'All', value: 'all', checked: true },
    { text: 'Personal', value: 'personal', checked: true },
    { text: 'Work', value: 'work', checked: true },
    { text: 'Family', value: 'family', checked: true },
    { text: 'Holiday', value: 'holiday', checked: true },
  ];

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

  toggleFilter(index: number) {
    if (index !== 0) {
      this.filters[index].checked = !this.filters[index].checked;

      if (
        this.filters.find(
          (filter) => filter.checked === false && filter.value !== 'all'
        )
      ) {
        this.filters[0].checked = false;
      } else {
        this.filters[0].checked = true;
      }
    } else {
      this.filters[0].checked = !this.filters[0].checked;
      this.filters.forEach(
        (filter) => (filter.checked = this.filters[0].checked)
      );
    }
  }
}
