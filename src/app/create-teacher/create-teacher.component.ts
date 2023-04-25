import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent {
  teacher: Teacher = new Teacher();

  constructor(private teacherService: TeacherService, private router: Router) {}

  saveTeacher() {
    this.teacherService.addTeacher(this.teacher).subscribe(data => {
      console.log(data);
      this.goToTeacherList();
    },
    error => console.log(error));
  }

  goToTeacherList() {
    this.router.navigate(['/teacher']);
  }

  onSubmit() {
    console.log(this.teacher);
    this.saveTeacher();
  }

}
