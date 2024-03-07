import { Component } from '@angular/core';
import { UserMetric } from '../models/types.type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userMetrics: UserMetric[] = [
    {
      title: 'Customers',
      amount: '1.2M',
      improvement: '+8.32%',
      timePeriod: 'Since Last week',
      iconLink: 'assets/dashboard/customers.svg'
    },
    {
      title: 'Corporative Users',
      amount: '800K',
      improvement: '+12.4 %',
      timePeriod: 'Since Last week',
      iconLink: 'assets/dashboard/corpUsers.svg'
    },
    {
      title: 'Professionals',
      amount: '4K',
      improvement: '+3.5 %',
      timePeriod: 'Since Last week',
      iconLink: 'assets/dashboard/professionals.svg'
    },
  ];

}
