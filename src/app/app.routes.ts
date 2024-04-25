import { Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'messages', component: MessagesComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },

  {
    path: '',
    component: ErrorLayoutComponent,
    children: [{ path: '**', component: PageNotFoundComponent }],
  },
];
