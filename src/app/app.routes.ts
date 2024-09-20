import { Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { NavigateComponent } from './navigate/navigate.component';
import { TaskComponent } from './task/task.component';

export const routes: Routes = [
    {
        path: 'navigate',
        component: NavigateComponent,
        children: [
          {
            path: 'section',
            component: SectionComponent
          },
          {
            path:'task',
            component:TaskComponent
          }
        ]
      },
      { path: '', redirectTo: '/navigate', pathMatch: 'full' }
];
