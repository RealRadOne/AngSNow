import {Component} from '@angular/core';
import { CoursesService } from 'src/app/courses.service'
@Component({
  selector: 'courses',
  template: `
            <h2>{{ "Title: "+ getTitle() }}</h2>
            <ul>
              <li *ngFor="let course of courses">
                {{ course }}
              </li>
            </ul>
            `
  //Binding a field to the view in this component
})
export class CoursesComponent
{
  //Attaching available decorator to make the class a component
  courses;
  title="List of courses";
  getTitle(){
    return this.title;
  }
//Using a real life HTTP endpoint to fetch data from
//Problem->Writing test cases in future will be a problem
  constructor()
  {
      let service = new CoursesService();
      this.courses = service.getCourses();
  }
}
