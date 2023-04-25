import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  music=false;
  read=false;
  dance=false;

  student: Student = new Student();

  constructor(private studentService: StudentService, private router: Router) {}

  saveStudent() {
    
    let hobbies = [];
    
    if(this.music==true) {
      hobbies.push("music");
    }

    if(this.read==true) {
      hobbies.push("read");
    }

    if(this.dance==true) {
      hobbies.push("dance");
    }

    this.student.hobbies=hobbies.join(",");

    this.studentService.addStudent(this.student).subscribe(data => {
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
    // console.log(this.student);
    
  }

  goToStudentList() {
    this.router.navigate(['/student']);
  }

  onSubmit() {
    console.log(this.student);
    this.saveStudent();
  }

}
