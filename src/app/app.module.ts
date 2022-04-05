import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectItemComponent } from './components/project/project-item/project-item.component';
import { TaskComponent } from './components/task/task.component';
import { TaskItemComponent } from './components/task/task-item/task-item.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TaskNewItemComponent } from './components/task/task-new-item/task-new-item.component';
import { ProjectNewItemComponent } from './components/project/project-new-item/project-new-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    ProjectComponent,
    ProjectItemComponent,
    TaskComponent,
    TaskItemComponent,
    ProfileComponent,
    TaskNewItemComponent,
    ProjectNewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
