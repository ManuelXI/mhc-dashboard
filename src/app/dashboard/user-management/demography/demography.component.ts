import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { get } from 'lodash';

@Component({
  selector: 'app-demography',
  templateUrl: './demography.component.html',
  styleUrl: './demography.component.scss',
})
export class DemographyComponent {
  highcharts = Highcharts;
  showGenderChart: boolean = false;
  doughnutChartOptions: Highcharts.Options = {
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
        innerSize: '75%',
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
            name: 'Male',
            y: 54.5,
            color: '#0085C8',
          },
          {
            name: 'Female',
            y: 45.5,
            color: '#D43A6A',
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };
  barChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: undefined,
    },
    xAxis: {
      className: 'paragraph-small-text',
      categories: ["55+", "45-54", "35-44", "25-34", "18-24", "14-18"],
      title: {
        text: null,
      },
    },
    yAxis: {
      className: 'paragraph-small-text-regular',
      min: 0,
      title: {
        text: '%',
        align: 'middle',
      },
      labels: {
        overflow: 'justify',
      },
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
        color: '#7CC3B5',
        data: [10, 50, 70, 80, 40, 15],
      },
    ],
  };

  toggleChart(chartType: string) {
    this.showGenderChart = chartType === 'gender';
  }

  get doughnutChartData(): Highcharts.PointOptionsObject[] | undefined {
    return get(this.doughnutChartOptions, 'series[0].data');
  }
}
