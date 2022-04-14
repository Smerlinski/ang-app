import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-new-item',
  templateUrl: './project-new-item.component.html',
  styleUrls: ['./project-new-item.component.scss']
})
export class ProjectNewItemComponent implements OnInit {

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

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.projectService.addProject(this.form).subscribe({
      next: data => {
        console.log(data);
      }
    });
  }
}
