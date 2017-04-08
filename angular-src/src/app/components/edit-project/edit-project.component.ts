import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ActivatedRoute} from '@angular/router';
import {ValidateService} from '../../services/validate.service';
import {ProjectService} from '../../services/project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  title: String;
  image: String;
  description: String;
  project: any;

  constructor(private flashMessages : FlashMessagesService,
   private validateService : ValidateService,
   private projectService : ProjectService,
   private router: Router,
   private route: ActivatedRoute) { }

   ngOnInit() {
   this.getProject();
  }
  
   getProject() {
     this.project = this.projectService.getProjectToEdit(this.route.snapshot.params['id']);
     }
  

  onRegisterSubmit(){
     const validateProject = {
      title: this.project.title,
      image: this.project.image,
      description: this.project.description
    }

      this.projectService.findProjectAndUpdate(this.route.snapshot.params['id']).subscribe(data => {
        if(data.success){
        this.flashMessages.show('Project Updated', {cssClass: 'alert-success', timeout: 3000})
        this.router.navigate(['/']);
        } else {
          this.flashMessages.show('Something went wrong ', {cssClass: 'alert-danger', timeout: 3000})
        this.router.navigate(['/']);
        }
      });
    
  }
  

}
