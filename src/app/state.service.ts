import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AppState {
  isLoggedIn: boolean;
  theme: string;
  language: string;
}

export interface AppStateAction {
  type: string;
  payload?: any;
}

export const toggleLoginActionCreator = (): AppStateAction => {
  return {
    type: 'toggleLogin',
  };
};

export const toggleThemeActionCreator = (): AppStateAction => {
  return {
    type: 'toggleTheme',
  };
};

export const changeLanguageActionCreator = (
  language: string
): AppStateAction => {
  return {
    type: 'changeLanguage',
    payload: {
      language,
    },
  };
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private stateSubject = new BehaviorSubject<AppState>({
    isLoggedIn: false,
    language: 'en',
    theme: 'light',
  });

  appState$ = this.stateSubject.asObservable();

  constructor() {
    console.log('StateService created');
  }

  private reducer(action: AppStateAction, currentState: AppState): AppState {
    switch (action.type) {
      case 'toggleLogin': {
        const newState = { ...currentState };
        newState.isLoggedIn = !newState.isLoggedIn;
        return newState;
      }

      case 'toggleTheme': {
        const newState = { ...currentState };
        newState.theme = newState.theme === 'light' ? 'dark' : 'light';
        return newState;
      }

      case 'changeLanguage': {
        const newState = { ...currentState };
        newState.language = action.payload.language;
        return newState;
      }

      default:
        currentState;
    }

    return currentState;
  }

  dispatch(action: AppStateAction): void {
    const newState = this.reducer(action, this.stateSubject.value);
    this.stateSubject.next(newState);
  }
}
