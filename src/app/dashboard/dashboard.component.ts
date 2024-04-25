import { Component } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { SendBannerComponent } from './send-banner/send-banner.component';
import { StickiesComponent } from './stickies/stickies.component';
import { CalendarComponent } from '../calendar/calendar.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MessagesComponent,
    SendBannerComponent,
    StickiesComponent,
    CalendarComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
