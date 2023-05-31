import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {
  AppState,
  StateService,
  toggleLoginActionCreator,
  toggleThemeActionCreator,
} from '../state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  appState$: Observable<AppState>;

  constructor(private stateService: StateService) {
    this.appState$ = this.stateService.appState$;
  }

  toggleLogin() {
    this.stateService.dispatch(toggleLoginActionCreator());
  }

  toggleTheme() {
    this.stateService.dispatch(toggleThemeActionCreator());
  }
}
