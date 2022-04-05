import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectNewItemComponent } from './components/project/project-new-item/project-new-item.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  { path: 'projects/newProject', component: ProjectNewItemComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
