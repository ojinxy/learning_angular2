import { Component } from '@angular/core';
import { AuthorsService } from '../../service/authors.service';
import { AutoGrowDirective } from '../../directives/autogrow/auto-grow.directive';


@Component({
    moduleId : module.id,
    selector : 'authors',
    templateUrl : 'authors.component.html',
    providers:[AuthorsService],
    directives:[AutoGrowDirective]
})

export class AuthorsComponent{
    title = "Authors";
    subTitle = "Title for the auhtors page"
    authors;

    constructor(authorsService : AuthorsService){
        this.authors = authorsService.getAuhtors();
    }
}
