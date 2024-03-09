import { Component } from '@angular/core';
import { AgChartsAngular } from 'ag-charts-angular';
import {
  AgChartOptions,
  AgCharts,
  AgChartTheme,
  AgPieSeriesFormat,
} from 'ag-charts-community';
import { get } from 'lodash';
import { UserData } from '../../../models/types.type';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  public options!: AgChartOptions;
  statusColors: { [key: string]: string } = {
    'Active Now': 'violet',
    Pending: 'green',
    Reported: 'red',
    Invited: 'blue',
    Suspended: 'orange',
    Banned: 'gray',
  };
  userData: UserData[] = []; 
  
  myTheme: AgChartTheme = {
    baseTheme: 'ag-default',
  };
  
  constructor() {
  }
  
  ngOnInit() {
    this.userData = this.getData();
    this.options = {
      data: this.userData,
      theme: this.myTheme,
      series: [
        {
          type: 'pie',
          angleKey: 'amount',
          formatter: this.formatter.bind(this),
          // legendItemKey: "status",
        },
      ],
    };
  }

  formatter(params: any): AgPieSeriesFormat {
    const status = get(params, 'datum.status');    
    const fill = get(this.statusColors, status, 'black');
    return {
      fill,
    };
  }

  getTotalAmount(): number {
    let totalAmount = 0;
    const data = this.userData;

    for (const item of data) {
      totalAmount += item.amount;
    }

    return totalAmount;
  }

  getData(): UserData[] {
    return [
      { status: 'Active Now', amount: 800000 },
      { status: 'Pending', amount: 115000 },
      { status: 'Reported', amount: 101000 },
      { status: 'Invited', amount: 115000 },
      { status: 'Suspended', amount: 40000 },
      { status: 'Banned', amount: 20000 },
    ];
  }

  getStatusColor(status: string): string {
    return this.statusColors[status] || 'black';
  }
}
