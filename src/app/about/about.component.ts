import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {
  AppState,
  StateService,
  changeLanguageActionCreator,
} from '../state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [StateService],
})
export class AboutComponent {
  appState$: Observable<AppState>;

  constructor(private stateService: StateService) {
    this.appState$ = this.stateService.appState$;
  }

  changeLanguage() {
    this.stateService.dispatch(changeLanguageActionCreator('kn'));
  }
}
