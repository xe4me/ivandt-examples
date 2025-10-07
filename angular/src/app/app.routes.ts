import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { SuccessComponent } from './pages/success.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'success', component: SuccessComponent }
];
