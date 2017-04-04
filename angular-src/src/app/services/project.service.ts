import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectService {
  image: String;
  description: String;
  title: String;


  constructor(private http:Http) { }

  createProject(project){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/projects/new', project, {headers: headers})
    .map(res => res.json());
  }
}
