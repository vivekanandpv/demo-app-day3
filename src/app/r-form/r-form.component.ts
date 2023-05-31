import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.scss'],
})
export class RFormComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      fullName: ['', [Validators.required]],
      age: [null, [this.validateAge.bind(this)]],
      newsletter: [false],
      language: [],
      rating: [],
      comments: [],
    });
  }

  get fullName(): FormControl {
    return this.form.controls['fullName'] as FormControl;
  }

  get age(): FormControl {
    return this.form.controls['age'] as FormControl;
  }

  get newsletter(): FormControl {
    return this.form.controls['newsletter'] as FormControl;
  }

  get language(): FormControl {
    return this.form.controls['language'] as FormControl;
  }

  get rating(): FormControl {
    return this.form.controls['rating'] as FormControl;
  }

  get comments(): FormControl {
    return this.form.controls['comments'] as FormControl;
  }

  validateAge(ctrl: AbstractControl): ValidationErrors | null {
    const val = +ctrl.value;

    if (val % 2 !== 0) {
      return {
        age_error: true,
      };
    }

    return null;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
