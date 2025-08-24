import { Component } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Series } from '../../models/series';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-series-form',
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: './series-form.component.html',
	styleUrl: './series-form.component.scss'
})
export class SeriesFormComponent {

	constructor(
		private seriesService: SeriesService,
		private router: Router
	) { }

	seriesForm = new FormGroup({
		title: new FormControl('', [Validators.required, Validators.minLength(3)]),
		seasons: new FormControl('', [Validators.required])
	})

	submitSeries() {
		console.log("submitSeries chiamato");
		if (this.seriesForm.valid) {
			const newSeries = this.seriesForm.value as Partial<Series>;
			this.seriesService.add(newSeries).subscribe(result => {
				console.log("serie salvata", result);
			});
			this.seriesForm.reset();
			this.router.navigate(['/']);
		} else {
			return console.error("non valido!")
		}
	}
}
