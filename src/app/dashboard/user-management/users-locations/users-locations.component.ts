import { Component } from '@angular/core';
import Highcharts from 'highcharts/highmaps';
import mapOfGhana from '../../../../assets/dashboard/User Locations/gh-all.geo.json';
import { TableData } from '../../../models/types.type';
@Component({
  selector: 'app-users-locations',
  templateUrl: './users-locations.component.html',
  styleUrl: './users-locations.component.scss',
})
export class UsersLocationsComponent {
  items: TableData[] = [
    { name: 'Kumasi', amount: 600, color: '#014775' },
    { name: 'Accra', amount: 200, color: '#0064A7' },
    { name: 'Tamale', amount: 200, color: '#0085C8' },
    { name: 'Secondi Takoradi', amount: 180, color: '#00ACE9' },
    { name: 'Ho', amount: 120, color: '#33BDED' },
  ];
  chartConstructor = 'mapChart';
  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      map: mapOfGhana,
      backgroundColor: '#FAFAFF',
    },
    title: {
      text: undefined,
    },
    mapNavigation: {
      enabled: false,
    },
    plotOptions: {
      map: {},
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        type: 'map',
        name: 'Map of Ghana',
        states: {
          hover: {
            color: '#D74090',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        data: [
          ['gh-ah', 10],
          ['gh-ep', 11],
          ['gh-wp', 12],
          ['gh-aa', 13],
          ['gh-tv', 14],
          ['gh-np', 15],
          ['gh-ue', 16],
          ['gh-uw', 17],
          ['gh-ba', 18],
          ['gh-cp', 19],
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  constructor() {}
}
