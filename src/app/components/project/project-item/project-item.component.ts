import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  id = ''
  projectDetail: any[] = []

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id = params['id']);
   }

  ngOnInit(): void {
    this.projectService.getProjectById(this.id).subscribe({
      next: data => {
        console.log(data);
        this.projectDetail.push(data);
        console.log(this.projectDetail)
      }
    })
  }

}
