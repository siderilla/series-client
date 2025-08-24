import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Series } from '../models/series';
import { of, tap, map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SeriesService {

	API_URL = 'https://localhost:7222/series';

	private seriesSubject = new BehaviorSubject<Series[]>([]);
	public series$ = this.seriesSubject.asObservable(); // flusso dati reattivo, il $ convenzione: indica che è un observable

	constructor(private http: HttpClient) { }

	getAll(): void {
		this.http.get<Series[]>(this.API_URL).subscribe(data => { // quando arrivano dati dal server
			this.seriesSubject.next(data); // eseguo questa funzione con quei dati
		}); // "AVVISA TUTTI QUELLI CHE STANNO OSSERVANDO che sono arrivati nuovi dati"
	}

	add(series: Partial<Series>): Observable<Series> {
		return this.http.post<Series>(this.API_URL, series)
			.pipe(tap(() =>
				this.getAll()));
	}

	delete(id: string): Observable<void> {
		return this.http.delete<void>(`${this.API_URL}/${id}`)
			.pipe(tap(() =>
				this.getAll()));;
	}

}
