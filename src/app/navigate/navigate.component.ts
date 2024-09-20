import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SectionComponent } from "../section/section.component";

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {

  constructor(private Router: Router) { }
  navigateToSection() {
    this.Router.navigateByUrl('/navigate').then(() => {
      this.Router.navigate(['/navigate/section'], { fragment: 'target' });
    });
  }

  listTask() {
    this.Router.navigateByUrl('/navigate').then(() => {
      this.Router.navigate(['/navigate/task'], { fragment: 'task' });
    });
  }

}
