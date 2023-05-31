import { Component } from '@angular/core';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.scss'],
})
export class TFormComponent {
  onSubmit(form: any) {
    if (form.invalid) {
      alert('invalid form');
      return;
    }

    console.log(form);
  }
}
