import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-update-classes',
  templateUrl: './update-classes.component.html',
  styleUrls: ['./update-classes.component.css']
})
export class UpdateClassesComponent {

  id: number;
  classes: Classes = new Classes();

  constructor(private classesService: ClassesService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.classesService.getClassById(this.id).subscribe(data=>{
      console.log(data);
      this.classes = {
        teacherId: data.teacherId,
        className: data.className
      }
      
    }, error=> console.log(error));
  }

  updateClass() {
    this.classesService.updateClass(this.id, this.classes).subscribe(data=>{
      console.log(data);
      this.classes = new Classes();
      this.goToClassesList();
    }, error=> console.log(error));
  }

  onSubmit(){
    this.classesService.updateClass(this.id, this.classes).subscribe(data=>{
      this.updateClass();
        this.goToClassesList();
    },error=>console.log(error));
  }

  goToClassesList() {
    this.router.navigate(['/class']);
  }
}
