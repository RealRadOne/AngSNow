import { Component } from '@angular/core';
import { CoursesService } from 'src/app/courses.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngSNow';
  //Defining a POST Object
  post = {
    title: "title",
    isFavorite: true
  }
}
