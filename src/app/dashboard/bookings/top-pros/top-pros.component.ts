import { Component } from '@angular/core';
import { TableData, TextFilterOptions } from '../../../models/types.type';

@Component({
  selector: 'app-top-pros',
  templateUrl: './top-pros.component.html',
  styleUrl: './top-pros.component.scss',
})
export class TopProsComponent {
  filterOptionsForSpecialists: TextFilterOptions = {
    background: false,
    options: [
      { text: 'Nutrition Specialists', value: 'Nutrition Specialists' },
    ],
  };
  filterOptions: TextFilterOptions = {
    background: false,
    orientation: 'right',
    options: [
      { text: 'Entities', value: 'Entities' },
      { text: 'Bookings', value: 'Bookings' },
      { text: 'Income', value: 'Income' },
    ],
  };
  items: TableData[] = [
    {
      name: 'Raymond Richards',
      amount: 2500,
      imageUrl: 'assets/dashboard/Top Professionals/Raymond Richards.svg',
    },
    {
      name: 'Arlene McCoy',
      amount: 2000,
      imageUrl: 'assets/dashboard/Top Professionals/Arlene McCoy.svg',
    },
    {
      name: 'Diane Russel',
      amount: 1500,
      imageUrl: 'assets/dashboard/Top Professionals/Diane Russel.svg',
    },
    {
      name: 'Albert Flores',
      amount: 1000,
      imageUrl: 'assets/dashboard/Top Professionals/Albert Flores.svg',
    },
    {
      name: 'James Williams',
      amount: 500,
      imageUrl: 'assets/dashboard/Top Professionals/James Williams.svg',
    },
  ];
}
