import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { UpdateClassesComponent } from './update-classes/update-classes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    StudentListComponent,
    TeacherListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    CreateTeacherComponent,
    UpdateTeacherComponent,
    ClassesListComponent,
    CreateClassComponent,
    UpdateClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
