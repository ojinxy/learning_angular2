import { Component } from '@angular/core'
import { CourseService } from '../../service/course.service'


@Component({
    moduleId: module.id,
    selector: 'course',
    templateUrl: 'course.component.html',
    providers: [CourseService]
})

export class CourseComponent {
    coursesTitle: string = "Courses";

    coursesSubTitle: string = "The title of courses page";

    courses;

    courseService;

    constructor(courseService: CourseService) {
        this.courseService = courseService;
        this.courses = courseService.getCourses();
    }
}

