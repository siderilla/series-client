import { Component } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Series } from '../../models/series';
import { CommonModule } from '@angular/common';
import { SeriesCardComponent } from '../series-card/series-card.component';

@Component({
	selector: 'app-series-list',
	imports: [CommonModule, SeriesCardComponent],
	templateUrl: './series-list.component.html',
	styleUrl: './series-list.component.scss'
})
export class SeriesListComponent {

	series: Series[] = []

	constructor(private seriesService: SeriesService) { }

	ngOnInit() {
		this.seriesService.series$.subscribe(data => {
			this.series = data;
		});

		this.seriesService.getAll();
	}
}
