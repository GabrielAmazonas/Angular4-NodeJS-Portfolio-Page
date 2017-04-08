import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  private project: any;
  private projectId: String;
  constructor(private projectService : ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'];
    this.projectService.getSingleProject(this.projectId).subscribe((res) => {
      console.log(res);
      this.project = res;
    });
  }

}
