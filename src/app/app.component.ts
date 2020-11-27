import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup; // ngForm was the default tool we used

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required), // These are kept as strings to avoid changes during minification
        // We set the validators here - we pass the method references here - much cleaner
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(formControl);
  }
}
