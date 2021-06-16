import {Component} from '@angular/core';
import { CoursesService } from 'src/app/courses.service'
@Component({
  selector: 'courses',
  template: `
            <h2>{{ "Title: "+ getTitle() }}</h2>
            <img src="{{ imageUrl }}"/>
            <ul>
              <li *ngFor="let course of courses">
                {{ course }}
              </li>
            </ul>
            <table>
            <td [attr.colspan]="colSpan">Hello!</td>
            </table>
            <button class="btn btn-primary" [class.active]="isActive">Save</button>
            `
  //With the attr attribute we can bind the element to the property
  //Three classes will show up in debugging mode
  //Binding a field to the view in this component
})
export class CoursesComponent
{
  //Attaching available decorator to make the class a component
  courses;
  title="List of courses";
  imageUrl= "http://lorempixel.com/400/200";
  isActive=true;
  colSpan=2;
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
