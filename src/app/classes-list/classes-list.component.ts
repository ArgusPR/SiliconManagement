import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {
  classes: Classes[];

  constructor(private classesService: ClassesService, private router: Router) {

  }

  ngOnInit(): void {
    this.getClasses();
  }

  private getClasses() {
    this.classesService.getClassesList().subscribe(data=>{
      this.classes = data;
      console.log(this.classes);
      
    });
  }

  updateClass (id: number){
    this.router.navigate(['update-class',id]);
  }

  deleteClass(classId: number) {
    this.classesService.deleteClass(classId).subscribe(data=>{
      console.log(data);
      this.getClasses();
    })
  }
}
