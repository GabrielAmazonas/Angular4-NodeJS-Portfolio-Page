import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects: any;
    project: any;

  constructor(private projectService: ProjectService) {
   }

  ngOnInit() {
    this.getProjects();   
  }

  getProjects() {
    this.projectService.getProjects().subscribe(response => {
    console.log(response);
    this.projects = response;
    })
  }

  onDetailsClick(projectId){
    this.projectService.getSingleProject(projectId).subscribe(response => {
      this.project = response;
    });
  }

}
