import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectUpdateComponent } from '../project-update/project-update.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule,FormsModule,ProjectUpdateComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{

  projects:any[]=[];
  projectName: string = ''; // Property for project name
  projectDescription: string = ''; // Property for project description
  successMessage:string='';
  errorMessage:string = '';
  isFormVisible:boolean=false;
  projectToUpdate: any = null; // To hold the project being updated
  constructor(private projectService: ProjectService,private router:Router) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  /**
   * Navigate to the project detail view given by its id
   * @param id the id of the project to view
   */
  viewProject(id: number) {
    return this.router.navigate(['/project', id]);

  }
  /**
   * Add a new project to the list with the given name and description
   * @param newProject the new project to add
   * @returns void
   */
  addProject(newProject:any){
    if (this.projectName && this.projectDescription) { // Check if inputs are filled
      const newProject = {
        id: this.projects.length + 1, 
        name: this.projectName,
        description: this.projectDescription
      };
      this.projects.push(newProject);
      this.successMessage = 'Project added successfully!'; 
      this.projectName = ''; 
      this.projectDescription = '';
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    } else {
      this.errorMessage = "Please fill in both fields";
      setTimeout(()=>{
        this.errorMessage = '';
      },2000);
      // alert('Please fill in both fields.'); // Alert if fields are empty
    }
  
  }

  /**
   * Toggle the visibility of the project form. If the form is visible, hide it,
   * otherwise show it.
   */
  toggleUpdateForm(project: any) {
    this.projectToUpdate = project; // Set the project to be updated
  }

  handleUpdate(updatedProject: any) {
    this.projectService.updateProject(updatedProject);
    this.projectToUpdate = null; // Reset after updating
    this.successMessage = 'Project updated successfully!';
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }
  handleCancel() {
    this.projectToUpdate = null; // Hide the form without saving changes
  }
  /**
   * Update the project list with the new project details. If the
   * project name and description are not empty, update the project
   * list with the new details and hide the form, otherwise alert the
   * user to fill in both fields.
   */
  update(){
    if (this.projectName&& this.projectDescription) {
      this.projectService.updateProject(this.projects);
      
      this.isFormVisible = false;
    } else {
      alert('Please fill in both the project name and description.');
    }
  }
  /**
   * Delete a project given by its id
   * @param id the id of the project to delete
   */
  deleteProject(id: number) {
    if( confirm('Are you sure you want to delete this project?')) {
      console.log('project deleted');
      this.projectService.deleteProject(id);
      this.projects = this.projectService.getProjects();
      return true;

    }else{
      console.log('project not deleted');
      return false;
    }
  
  }

  /**
   * Navigate back to the previous route in the browser's history.
   * @returns {void}
   */
  goBack(){
    window.history.back();
  }
}
