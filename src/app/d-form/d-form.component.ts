import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-d-form',
  templateUrl: './d-form.component.html',
  styleUrls: ['./d-form.component.scss'],
})
export class DFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      city: [],
      contacts: new FormArray([]),
    });
  }

  get fullName(): FormControl {
    return this.form.controls['fullName'] as FormControl;
  }

  get city(): FormControl {
    return this.form.controls['city'] as FormControl;
  }

  get contacts(): FormGroup[] {
    return (this.form.controls['contacts'] as FormArray)
      .controls as FormGroup[];
  }

  addContact() {
    (this.form.controls['contacts'] as FormArray).push(
      this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        description: ['', [Validators.maxLength(25)]],
      })
    );
  }

  removeContact(index: number) {
    (this.form.controls['contacts'] as FormArray).removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form', this.form.value);
    } else {
      console.log('invalid form');
    }
  }
}
