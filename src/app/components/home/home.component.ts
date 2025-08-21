import { Component } from '@angular/core';
import { SeriesListComponent } from "../series-list/series-list.component";

@Component({
  selector: 'app-home',
  imports: [SeriesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
