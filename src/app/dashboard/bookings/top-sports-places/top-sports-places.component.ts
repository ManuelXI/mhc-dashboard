import { Component } from '@angular/core';
import { TableData } from '../../../models/types.type';

@Component({
  selector: 'app-top-sports-places',
  templateUrl: './top-sports-places.component.html',
  styleUrl: './top-sports-places.component.scss'
})
export class TopSportsPlacesComponent {
  items: TableData[] = [
    { name: 'Halo Salt Gym', amount: 849 },
    { name: 'Dream Sweam Pool', amount: 624 },
    { name: 'Energytherapy', amount: 453 },
    { name: 'YoGa House', amount: 374 },
    { name: 'Wellness Gym', amount: 294 }
  ];  
}
