import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeriesFormComponent } from './components/series-form/series-form.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'add', component: SeriesFormComponent},
];
