import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: any;
  title: any;
  description: any;
  image: any;
  
  constructor(private projectService : ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getProject();
  }
  
   getProject() {
     this.project = this.projectService.getSingleProject(this.route.snapshot.params['id']);
     this.title = this.project.title;
     console.log("Title: " + this.title);
     this.description = this.project.description;
     this.image = this.project.image;
  }

}
