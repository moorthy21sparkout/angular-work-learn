import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigateComponent } from "./navigate/navigate.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-work-learn';
}
