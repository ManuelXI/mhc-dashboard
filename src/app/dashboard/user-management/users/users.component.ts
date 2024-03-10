import { Component } from '@angular/core';
import { Data, UserData } from '../../../models/types.type';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  highcharts = Highcharts;
  pieChartData: Data[] = [
    { name: 'Active Now', amount: 800000, color: '#00ACE9' },
    { name: 'Pending', amount: 115000, color: '#DEE049' },
    { name: 'Reported', amount: 101000, color: '#DD8B3B' },
    { name: 'Invited', amount: 115000, color: '#7AA5D9' },
    { name: 'Suspended', amount: 40000, color: '#B75FDC' },
    { name: 'Banned', amount: 20000, color: '#C6372E' },
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
            name: 'Active Now',
            y: 800000 / 1191000,
            color: '#00ACE9',
          },
          {
            name: 'Pending',
            y: 115000 / 1191000,
            color: '#DEE049',
          },
          {
            name: 'Reported',
            y: 101000 / 1191000,
            color: '#DD8B3B',
          },
          {
            name: 'Invited',
            y: 115000 / 1191000,
            color: '#7AA5D9',
          },
          {
            name: 'Suspended',
            y: 40000 / 1191000,
            color: '#B75FDC',
          },
          {
            name: 'Banned',
            y: 20000 / 1191000,
            color: '#C6372E',
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  userData: UserData[] = [];

  getTotalAmount(): number {
    let totalAmount = 0;
    const data = this.pieChartData;

    for (const item of data) {
      totalAmount += item.amount;
    }

    return totalAmount;
  }
}
