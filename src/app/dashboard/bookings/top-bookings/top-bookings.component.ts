import { Component } from '@angular/core';
import { TableData, TextFilterOptions } from '../../../models/types.type';

@Component({
  selector: 'app-top-bookings',
  templateUrl: './top-bookings.component.html',
  styleUrl: './top-bookings.component.scss',
})
export class TopBookingsComponent {
  items: TableData[] = [
    { name: 'Get Healthier with MHC', amount: 849 },
    { name: 'Yoga & Meditations for Beginners', amount: 721 },
    { name: 'Running for Weight Loss', amount: 645 },
    { name: 'Yogalates', amount: 549 },
    { name: 'TRX', amount: 432 },
  ];
  filterOptions: TextFilterOptions = {
    background: false,
    options: [
      { text: 'Programs', value: 'Programs' },
      { text: 'Events', value: 'Events' },
      { text: 'Classes', value: 'Classes' },
    ],
  };
}
