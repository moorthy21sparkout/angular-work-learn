import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigateComponent } from "./navigate/navigate.component";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigateComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-work-learn';
}
