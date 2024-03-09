import { Component } from '@angular/core';
import { AgChartsAngular } from 'ag-charts-angular';
import {
  AgBarSeriesOptions,
  AgChartOptions,
  AgCharts,
  AgLineSeriesOptions,
  AgCategoryAxisOptions,
  AgNumberAxisOptions,
  AgChartLegendOptions,
} from 'ag-charts-community';

@Component({
  selector: 'app-users-locations',
  templateUrl: './users-locations.component.html',
  styleUrl: './users-locations.component.scss'
})
export class UsersLocationsComponent {
  public options;

  constructor() {
    this.options = {
      title: { text: 'Ice Cream Sales' },
      subtitle: { text: 'Data from 2022' },
      legend: {
        position: 'right',
      } as AgChartLegendOptions,
      // Data: Data to be displayed in the chart
      data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
      ],
      // Series: Defines which chart type and data to use
      series: [
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'iceCreamSales',
        } as AgBarSeriesOptions,
        { type: 'line', xKey: 'month', yKey: 'avgTemp' } as AgLineSeriesOptions,
      ],
      axes: [
        // Display category (xKey) as the bottom axis
        {
          type: 'category',
          position: 'bottom',
        } as AgCategoryAxisOptions,
        // Use left axis for 'iceCreamSales' series
        {
          type: 'number',
          position: 'left',
          keys: ['iceCreamSales'],
          label: {
            formatter: (params) => {
              return parseFloat(params.value).toLocaleString();
            },
          },
        } as AgNumberAxisOptions,
        // Use right axis for 'avgTemp' series
        {
          type: 'number',
          position: 'right',
          keys: ['avgTemp'],
          label: {
            formatter: (params) => {
              return params.value + ' °C';
            },
          },
        } as AgNumberAxisOptions,
      ],
    };
  }

}
