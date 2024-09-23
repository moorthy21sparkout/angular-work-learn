import { Component } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-delete',
  standalone: true,
  imports: [],
  templateUrl: './project-delete.component.html',
  styleUrl: './project-delete.component.css'
})
export class ProjectDeleteComponent {

  constructor(private projectService: ProjectService) { }

  deleteProject(id: number) {

    console.log('project deleted');
    
    console.log(id);
    this.projectService.trigerUpdateProject();
  }
}
