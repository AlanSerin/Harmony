import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-error-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './error-layout.component.html',
  styleUrl: './error-layout.component.css',
})
export class ErrorLayoutComponent {}
