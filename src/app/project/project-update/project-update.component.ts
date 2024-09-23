import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProjectService } from '../project.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './project-update.component.html',
  styleUrl: './project-update.component.css'
})
export class ProjectUpdateComponent implements OnInit,OnDestroy {
  @Input() project: any = { id: 0, name: '', description: '' }; // Input to receive project data
  @Output() onUpdate = new EventEmitter<any>(); // Output event to emit updated project
  @Output() onCancel = new EventEmitter<any>(); // Output event to handle cancel action
  private updateSubscription!: Subscription;
  private destroy$ = new Subject<void>();


  constructor (private projectService: ProjectService) { }

  saveChanges() {
    if (this.project.name && this.project.description) {
      this.onUpdate.emit(this.project); // Emit the updated project data
    } else {
      alert('Please fill in both the project name and description.');
    }
  }

  cancel() {
    this.onCancel.emit(this.project); // Emit the cancel event to hide the form
  }
 





  ngOnInit(): void {
    /** 
     * this is the ine method
     */
    // this.updateSubscription = this.projectService.updateProjectTrigger$.subscribe((res)=> {
    //   this.updateProject(res);
    //  })

    /**
     * another method for destroying subscription
     */

    // this.updateSubscription = this.projectService.updateProjectTrigger$.pipe(takeUntil(this.destroy$)).subscribe((res: any)=> {
    //   this.updateProject(res);
    // })
      }


  updateProject(res:any) {
    // console.log('project updated after deleted', res);
  }

  cleanup() {
    // this.destroy$.next();
    // this.destroy$.complete();
  }
  ngOnDestroy(): void {
    // alert('project deleted');
    // this.destroy$.next();
    // this.destroy$.complete();
    // this.cleanup();
  }

}
