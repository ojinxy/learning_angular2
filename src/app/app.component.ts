import { Component } from '@angular/core';
import {CourseComponent} from './components/course/course.component'
import { AuthorsComponent } from './components/authors/authors.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CourseComponent, AuthorsComponent]
})
export class AppComponent {
  title = 'My First Angular 2 App';

}
