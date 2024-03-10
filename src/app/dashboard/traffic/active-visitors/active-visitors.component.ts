import { Component } from '@angular/core';
import { Data } from '../../../models/types.type';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-active-visitors',
  templateUrl: './active-visitors.component.html',
  styleUrl: './active-visitors.component.scss'
})
export class ActiveVisitorsComponent {
  highcharts = Highcharts;
  pieChartData: Data[] = [
    {
      name: 'Mobile',
      amount: 78,
      color: '#0085C8',
    },
    {
      name: 'Desktop',
      amount: 14,
      color: '#DC5EB2',
    },
    {
      name: 'Tablet',
      amount: 8,
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
            name: 'Mobile',
            y: 78,
            color: '#0085C8',
          },
          {
            name: 'Desktop',
            y: 14,
            color: '#DC5EB2',
          },
          {
            name: 'Tablet',
            y: 8,
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
