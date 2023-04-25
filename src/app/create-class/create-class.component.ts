import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent {

  classes: Classes = new Classes();

  constructor(private classesService: ClassesService, private router: Router) {}

  saveClasses() {
    this.classesService.addClass(this.classes).subscribe(data => {
      console.log(data);
      this.goToClassesList();
    },
    error => console.log(error));
  }

  goToClassesList() {
    this.router.navigate(['/class']);
  }

  onSubmit() {
    console.log(this.classes);
    this.saveClasses();
  }

}
