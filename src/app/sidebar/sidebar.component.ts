import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapHouseFill,
  bootstrapCalendarFill,
  bootstrapStickyFill,
  bootstrapChatDotsFill,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, NgIconComponent],
  providers: [
    provideIcons({
      bootstrapHouseFill,
      bootstrapCalendarFill,
      bootstrapStickyFill,
      bootstrapChatDotsFill,
    }),
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  routes = [
    { name: 'Dashboard', path: '/dashboard', icon: 'bootstrapHouseFill' },
    { name: 'Calendar', path: '/calendar', icon: 'bootstrapCalendarFill' },
    { name: 'Notes', path: '/notes', icon: 'bootstrapStickyFill' },
    { name: 'Messages', path: '/messages', icon: 'bootstrapChatDotsFill' },
  ];
}
