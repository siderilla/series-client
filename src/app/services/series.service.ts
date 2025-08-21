import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Series } from '../models/series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

	constructor(private http: HttpClient) {}

	getAll(): Observable<Series[]> {
		return this.http.get<Series[]>('https://localhost:7222/series');
	}

}
