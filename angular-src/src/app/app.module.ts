import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages/module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';

import {ValidateService} from './services/validate.service';
import {ProjectService} from './services/project.service';
import {FlashMessagesService} from 'angular2-flash-messages';



const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'new', component: NewComponent},
  {path:'detail', component: HomeComponent}
];

@NgModule({
  //components
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,
    JumbotronComponent,
    ProjectsComponent,
    HomeComponent,
    FooterComponent,
    NewComponent
  ],
  //modules
  imports: [
    BrowserModule,
    FlashMessagesModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  //services
  providers: [ValidateService, FlashMessagesService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
