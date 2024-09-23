import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigateComponent } from "./navigate/navigate.component";
import { TaskComponent } from "./task/task.component";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ProjectUpdateComponent } from "./project/project-update/project-update.component";
import { ProjectDeleteComponent } from "./project/project-delete/project-delete.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigateComponent, TaskComponent, DragDropModule, CommonModule, ProjectUpdateComponent, ProjectDeleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-work-learn';
  task = [
    { title: "html" },
    { title: "css" },
    { title: "bootstrap" },
    { title: "javascript" },
    { title: "Reactjs" },
    { title: "Angularjs" },
    { title: "C++" },
    { title: "pythan" }
  ];
  /**
   * 
   * @param event 
   */
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.task, event.previousIndex, event.currentIndex);
  }


}
