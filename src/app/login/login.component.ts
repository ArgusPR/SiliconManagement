import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title: 'login';
  reactiveForm: FormGroup;
  formStatus;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
        
        email: new FormControl(null,[Validators.required,Validators.email]),
        password: new FormControl(null,[Validators.required,this.noSpaceAllowed]),
      });

      this.reactiveForm.statusChanges.subscribe((value)=>{
        console.log(value);
        this.formStatus = value;
        
      })

  }

  noSpaceAllowed(control: FormControl) {
    if(control.value != null && control.value.indexOf(' ') != -1) {
      return {noSpaceAllowed: true}
    }
    return null;
  }

  onSubmit() {
    console.log(this.reactiveForm);
    this.reactiveForm.reset({
            email: '',
            password: ''
    });
  }
}
