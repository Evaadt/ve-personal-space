import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

export default () => bootstrapApplication(AppComponent, appConfig);
