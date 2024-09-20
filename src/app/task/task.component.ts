import { Component, OnInit } from '@angular/core';
import { Task, Status, Priority } from '../models/property.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  task: Task[] = [] //Hold the instance
  statuses = Object.values(Status);
  newTaskTitle: string = ''; // New task title
  priorities = Object.values(Priority);


  newTaskPriority: Priority = Priority.Low; // New task priority
  newTaskStatus: Status = Status.pending; // New task status

  constructor(private route: ActivatedRoute,
    private notificationService:NotificationService
  ) { }
  ngOnInit(): void {
    const savedTasks = localStorage.getItem('tasks');
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    })
    if (savedTasks) {
      this.task = JSON.parse(savedTasks)
    } else {
      this.task = [
        new Task('Design new feature', Priority.High, Status.Inprogress),
        new Task('Fix bugs', Priority.Medium, Status.pending),
        new Task('Update documentation', Priority.Low, Status.Completed),
        new Task('Code review', Priority.High, Status.pending),
      ]
    }
  }
  /**
   * Add the task 
   */

  addTask() {
    alert(this.statuses)

    if (this.newTaskTitle.trim()) {
      this.task.push(new Task(this.newTaskTitle, this.newTaskPriority, this.newTaskStatus));
      localStorage.setItem('tasks', JSON.stringify(this.task))
      // Clear form fields after adding the task
      this.newTaskTitle = '';
      this.newTaskPriority = Priority.Low;
      this.newTaskStatus = Status.pending;
    }
  }

  /**
   * 
   * @param task 
   * @param event 
   */
  changeStatus(task: any, event: Event) {
    const target = event.target as HTMLSelectElement;
    const newStatus = target.value as Status; // Assuming TaskStatus is an enum
    task.status = newStatus;
        // Send email notification when status changes
        this.notificationService.sendStatusChangeNotification(task.title, task.status);
  }

}
