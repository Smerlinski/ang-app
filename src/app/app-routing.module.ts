import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MessageNewItemComponent } from './components/messages/message-new-item/message-new-item.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectNewItemComponent } from './components/project/project-new-item/project-new-item.component';
import { ProjectComponent } from './components/project/project.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  { path: 'projects/newProject', component: ProjectNewItemComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'messages', component: MessagesComponent, children: [
    {
      path: 'new', component: MessageNewItemComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
