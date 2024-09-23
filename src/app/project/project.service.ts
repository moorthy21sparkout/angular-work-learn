import { Injectable } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  pipe(arg0: MonoTypeOperatorFunction<unknown>) {
    throw new Error('Method not implemented.');
  }

  private project = [
    {id:1,  name:"project 1",description:'this is the project 1',status:"active",response:"200"},
    {id:2,  name:"project 2",description:'this is the project 2',status:"active",response:"200"},
    {id:3,  name:"project 3",description:'this is the project 3',status:"active",response:"200"},  
]

  constructor() { }
  private updateProjectTrigger = new Subject<any>;
  private destroy$ = new Subject<Number>();

  updateProjectTrigger$ = this.updateProjectTrigger.asObservable();

  /**
   * Get the list of all projects
   * @returns the list of all projects
   */
  getProjects() {
    return this.project;
  }

  /**
   * Get a project given by its id
   * @param id the id of the project to get
   * @returns the project with the given id if it exists, undefined otherwise
   */
  getProject(id: number) {
    return this.project.find((project) => project.id === id);
  }
  /**
   * Update a project given by the provided updatedProject
   * @param updatedProject the project to update
   */
  updateProject(updatedProject: any) {
    const index = this.project.findIndex((project) => project.id === updatedProject.id);
    if (index !== -1) {
      this.project[index] = updatedProject;
    }
  }
  /**
   * Delete a project given by its id
   * @param id the id of the project to delete
   */
  deleteProject(id: number) {
     this.project = this.project.filter((project) => project.id !== id);
     this.destroy$.next(id);


  }
  /**
   * Trigger an update to a project with id 1
   * 
   * This method is used for testing purposes, it triggers an update to the first project in the list
   * and logs a message to the console.
   */
  trigerUpdateProject() {
    const updateData = { id: 1, status: 'updated' ,response:"200"}; 
    console.log('trigger update project');
    
    this.updateProjectTrigger.next(updateData);
  } 
}
