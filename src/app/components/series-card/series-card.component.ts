import { Component, Input } from '@angular/core';
import { Series } from '../../models/series';
import { SeriesService } from '../../services/series.service';

@Component({
	selector: 'app-series-card',
	imports: [],
	templateUrl: './series-card.component.html',
	styleUrl: './series-card.component.scss'
})
export class SeriesCardComponent {

	@Input() serie!: Series;
	
	constructor(private seriesService: SeriesService) { }

	onDelete(id: string) {
		console.log('Sto eliminando la serie con ID:', id);
		this.seriesService.delete(id).subscribe(result => {
			console.log("cancellando serie", this.serie.title)
		})
	}

}
