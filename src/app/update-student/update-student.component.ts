import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  music=false;
  read=false;
  dance=false;
  id: number;
  student: Student = new Student();
  // student: any = {
  //   userDetails: {}
  // };

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data=>{
      console.log(data);
      this.student = {
        studId: data.studId,
        userId: data.userId,
        role: data.userDetails.role,
        fullName: data.userDetails.fullName,
        dob: data.userDetails.dob,
        gender: data.userDetails.gender,
        phone: data.userDetails.phone,
        currentAddress: data.userDetails.currentAddress,
        permanentAddress: data.userDetails.permanentAddress,
        hobbies: data.hobbies,
        standard: data.standard
      }
      
    }, error=> console.log(error));
  }

  ngOnInit(): void {
    
    
  }

  updateStudent() {

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
    this.studentService.updateStudent(this.id, this.student).subscribe(data=>{
      console.log(data);
      this.student = new Student();
      this.goToStudentList();
    }, error=> console.log(error));
  }

  onSubmit(){
    this.studentService.updateStudent(this.id, this.student).subscribe(data=>{
      this.updateStudent();
        this.goToStudentList();
    },error=>console.log(error));
  }

  goToStudentList() {
    this.router.navigate(['/student']);
  }

}
