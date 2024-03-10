import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { get } from 'lodash';
import { Data } from '../../../models/types.type';

@Component({
  selector: 'app-active-entities',
  templateUrl: './active-entities.component.html',
  styleUrls: [
    '../../user-management/users/users.component.scss',
    './active-entities.component.scss',
  ],
})
export class ActiveEntitiesComponent {
  highcharts = Highcharts;
  pieChartData: Data[] = [
    {
      name: 'Classes',
      amount: 351,
      color: '#DD8B3B',
    },
    {
      name: 'Programs',
      amount: 284,
      color: '#D43A6A',
    },
    {
      name: 'Events',
      amount: 199,
      color: '#DEE049',
    },
  ];
  pieChartOptions: Highcharts.Options = {
    chart: {
      plotShadow: false,
    },
    title: {
      text: undefined,
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        shadow: false,
        size: '100%',
        // innerSize: '75%',
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Classes',
            y: 351 / 834,
            color: '#DD8B3B',
          },
          {
            name: 'Programs',
            y: 284 / 834,
            color: '#D43A6A',
          },
          {
            name: 'Events',
            y: 199 / 834,
            color: '#DEE049',
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  getTotalAmount(): number {
    let totalAmount = 0;
    const data = this.pieChartData;

    for (const item of data) {
      totalAmount += item.amount;
    }

    return totalAmount;
  }
}
