import { Component } from '@angular/core';
import { TextFilterOptions } from '../../../models/types.type';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-traffic-chart',
  templateUrl: './traffic-chart.component.html',
  styleUrl: './traffic-chart.component.scss',
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
  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: [
        '01 Feb',
        '02 Feb',
        '03 Feb',
        '04 Feb',
        '05 Feb',
        '06 Feb',
        '07 Feb',
      ],
      className: 'paragraph-small-text-regular-for-chart',
      lineColor: '#E6E8F3',
    },
    yAxis: {
      className: 'paragraph-small-text-for-chart',
      title: {
        text: undefined,
      },
      labels: {
        // formatter: function () {
        //   return this.value + 'K';
        // },
      },
      // max: 30,
    },
    plotOptions: {
      line: {
        showInLegend: false,
      },
    },
    series: [
      {
        name: 'Direct',
        type: 'line',
        data: [480, 250, 460,230, 600, 490, 600],
        color: '#7CC3B5',
        marker: {
          enabled: false,
        },
      },
      {
        name: 'Organic Search',
        type: 'line',
        data: [510, 600, 480, 230, 550, 950, 950],
        color: '#DEE049',
        marker: {
          enabled: false,
        },
      },
      {
        name: 'Social',
        type: 'line',
        data: [600, 1000, 960, 1450, 1490, 1370, 1800],
        color: '#DD8B3B',
        marker: {
          enabled: false,
        },
      },
      {
        name: 'Referral',
        type: 'line',
        data: [1450, 1560, 1180, 1800, 1600, 2100, 2010],
        color: '#7AA5D9',
        marker: {
          enabled: false,
        },
      },
      {
        name: 'Other',
        type: 'line',
        data: [850, 790, 1480, 650, 1600, 2350, 2450],
        color: '#DC5EB2',
        marker: {
          enabled: false,
        },
      },
    ],
    credits: {
      enabled: false,
    },
  };
}
