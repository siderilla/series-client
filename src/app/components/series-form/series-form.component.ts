import { Component } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './series-form.component.html',
  styleUrl: './series-form.component.scss'
})
export class SeriesFormComponent {

	constructor (private seriesService: SeriesService) {}

	seriesForm = new FormGroup({
		title: new FormControl('', [Validators.required, Validators.minLength(3)]),
		seasons: new FormControl('', [Validators.required])
	})
}
