import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent {

  id: number;
  teacher: Teacher = new Teacher();

  constructor(private teacherService: TeacherService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.teacherService.getTeacherById(this.id).subscribe(data=>{
      console.log(data);
      this.teacher = {
        teacherId: data.teacherId,
        userId: data.userId,
        role: data.userDetails.role,
        fullName: data.userDetails.fullName,
        dob: data.userDetails.dob,
        gender: data.userDetails.gender,
        phone: data.userDetails.phone,
        currentAddress: data.userDetails.currentAddress,
        permanentAddress: data.userDetails.permanentAddress,
        subTaught: data.subTaught,
        className: data.className,
        qualification: data.qualification
      }
      
    }, error=> console.log(error));
  }

  updateTeacher() {
    this.teacherService.updateTeacher(this.id, this.teacher).subscribe(data=>{
      console.log(data);
      this.teacher = new Teacher();
      this.goToTeacherList();
    }, error=> console.log(error));
  }

  onSubmit(){
    this.teacherService.updateTeacher(this.id, this.teacher).subscribe(data=>{
      this.updateTeacher();
        this.goToTeacherList();
    },error=>console.log(error));
  }

  goToTeacherList() {
    this.router.navigate(['/teacher']);
  }

}
