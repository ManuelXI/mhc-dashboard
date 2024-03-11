import { Component } from '@angular/core';
import { TextFilterOptions } from '../../../models/types.type';

@Component({
  selector: 'app-traffic-chart',
  templateUrl: './traffic-chart.component.html',
  styleUrl: './traffic-chart.component.scss'
})
export class TrafficChartComponent {
  filterOptions: TextFilterOptions = {
    background: false,
    options: [
      { text: 'Channel', value: 'Channel' },
      { text: 'Source', value: 'Source' },
      { text: 'Referrals', value: 'Referrals' },
    ],
  };

}
