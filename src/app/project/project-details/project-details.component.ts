import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit,OnDestroy{

  project:any;
  isFormVisible: boolean = false; 
  constructor(private projectService: ProjectService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.project = this.projectService.getProject(id);
    console.log(id);
  }
  ngOnDestroy(): void {
    console.log('project deleted successfully');
    
  }
 
  goBack() {
    // window.history.back();
    return this.router.navigate(['']);
  }
}
