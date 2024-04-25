import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapPersonCircle,
  bootstrapPlus,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ bootstrapPersonCircle, bootstrapPlus })],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  messages: Message[] = [
    { text: 'Hello, how are you?', sender: 'John', time: '10:00' },
    { text: 'I am fine, thank you.', sender: 'Jane', time: '10:01' },
    { text: 'What are you doing?', sender: 'John', time: '10:02' },
    { text: 'I am reading a book.', sender: 'Jane', time: '10:03' },
  ];

  sendMessage(message: string) {
    this.messages.push({ text: message, sender: 'John', time: '10:04' });
  }
}

interface Message {
  text: string;
  sender: string;
  time: string;
}
