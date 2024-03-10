import { Component } from '@angular/core';
import { TableData } from '../../../models/types.type';

@Component({
  selector: 'app-top-income',
  templateUrl: './top-income.component.html',
  styleUrl: './top-income.component.scss'
})
export class TopIncomeComponent {
  items: TableData[] = [
    {
      name: 'Ava Greendale',
      amount: 12200,
      imageUrl: 'assets/dashboard/Top Income/Ava Greendale.svg',
    },
    {
      name: 'Ben Robertsson',
      amount: 11758,
      imageUrl: 'assets/dashboard/Top Income/Ben Robertsson.svg',
    },
    {
      name: 'Cole McCallen',
      amount: 10342,
      imageUrl: 'assets/dashboard/Top Income/Cole McCallen.svg',
    },
    {
      name: 'Davon Parker',
      amount: 10103,
      imageUrl: 'assets/dashboard/Top Income/Davon Parker.svg',
    },
    {
      name: 'Elisa Mellory',
      amount: 9209,
      imageUrl: 'assets/dashboard/Top Income/Elisa Mellory.svg',
    },
  ];
}
