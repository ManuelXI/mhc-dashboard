import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-top-sports',
  templateUrl: './top-sports.component.html',
  styleUrl: './top-sports.component.scss',
})
export class TopSportsComponent {
  highcharts = Highcharts;
  barChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: undefined,
    },
    xAxis: {
      className: 'paragraph-small-text-for-chart',
      categories: ['Fitness', 'Running', 'Tennis', 'Aerobics', 'Swimming'],
      title: {
        text: null,
      },
    },
    yAxis: {
      className: 'paragraph-small-text-regular-for-chart',
      min: 0,
      title: {
        text: undefined,
      },
      labels: {
        overflow: 'justify',
      },
      max: 10000,
      lineColor: '#E6E8F3', // Set the color of the y-axis line here
      lineWidth: 1
    },    
    tooltip: {
      valueSuffix: '%',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'bar',
        color: '#DEE049',
        data: [8500, 6500, 6500, 4500, 1500],
      },
    ],
  };
}
