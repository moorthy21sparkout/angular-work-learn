import { Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { NavigateComponent } from './navigate/navigate.component';
import { TaskComponent } from './task/task.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';

export const routes: Routes = [
    // {
    //     path: 'navigate',
    //     component: NavigateComponent,
    //     children: [
    //       {
    //         path: 'section',
    //         component: SectionComponent
    //       },
    //       {
    //         path:'task',
    //         component:TaskComponent
    //       }
    //     ]
    //   },
    //   { path: '', redirectTo: '/navigate', pathMatch: 'full' }

    { path: '', component: ProjectListComponent },
    { path: 'project/:id', component: ProjectDetailsComponent },

];
