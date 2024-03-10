import { Component } from '@angular/core';
import { Revenue } from '../../../models/types.type';

@Component({
  selector: 'app-revenue-and-expences',
  templateUrl: './revenue-and-expences.component.html',
  styleUrl: './revenue-and-expences.component.scss'
})
export class RevenueAndExpencesComponent {
  revenues: Revenue[] = [
    {
      type: 'Revenue',
      percentage: 37.89,
      lastMonthAMount: 59000,
      thisMonthAMount: 95000
    },
    {
      type: "Expences",
      percentage: -56.54,
      lastMonthAMount: 14450,
      thisMonthAMount: 6280
    },
  ]

}
