import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { UpdateClassesComponent } from './update-classes/update-classes.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'add-student',component:CreateStudentComponent},
  {path:'add-teacher',component:CreateTeacherComponent},
  {path:'add-class',component:CreateClassComponent},
  {path:'student',component:StudentListComponent},
  {path:'teacher',component:TeacherListComponent},
  {path:'class',component:ClassesListComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'create-student',component:CreateStudentComponent},
  {path:'update-student/:id', component:UpdateStudentComponent},
  {path:'update-teacher/:id', component:UpdateTeacherComponent},
  {path:'update-class/:id', component:UpdateClassesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
