import { Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { NavigateComponent } from './navigate/navigate.component';

export const routes: Routes = [
    {
        path: 'navigate',
        component: NavigateComponent,
        children: [
          {
            path: 'section',
            component: SectionComponent
          }
        ]
      },
      { path: '', redirectTo: '/navigate', pathMatch: 'full' }
];
