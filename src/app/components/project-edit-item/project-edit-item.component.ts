import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-edit-item',
  templateUrl: './project-edit-item.component.html',
  styleUrls: ['./project-edit-item.component.scss']
})
export class ProjectEditItemComponent implements OnInit {

  id = ''

  form: any = {
    author: {
      email: null,
      id: null
    },
    name: null,
    description: null,
    end_date: null,
    id: null,
  }

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.projectService.getProjectById(this.id).subscribe({
      next: data => {
        this.form.author.email = data.author.email;
        this.form.author.id = data.author.id;
        this.form.name = data.name;
        this.form.description = data.description;
        this.form.end_date = data.end_date;
        this.form.id = data.id;
        console.log(this.form)
      }
    })
  }

  edit(): void {
    this.projectService.editProject(this.id, this.form).subscribe({
      next: data => {
        console.log(data);
      }
    });
  }
}
