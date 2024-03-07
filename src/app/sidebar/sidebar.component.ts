import { Component } from '@angular/core';
import { MenuItem } from '../models/types.type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { type: 'page', title: 'Dashboard', route: '/', iconLink: 'dashboard.svg' },
    {
      type: 'group',
      title: 'Users',
      children: [
        { type: 'page', title: 'Users', route: '/', iconLink: 'users.svg' },
        {
          type: 'page',
          title: 'Transactions',
          route: '/',
          iconLink: 'transactions.svg',
        },
        {
          type: 'page',
          title: 'Commissions',
          route: '/',
          iconLink: 'commissions.svg',
        },
        {
          type: 'collapsible',
          title: 'Bookings',
          collapsed: true,
          iconLink: 'bookings.svg',
          children: [{ type: 'page', title: 'Commissions', route: '/' }],
        },
        {
          type: 'collapsible',
          title: 'Reviews',
          collapsed: true,
          children: [],
          iconLink: 'reviews.svg',
        },
        {
          type: 'collapsible',
          title: 'Reports',
          collapsed: true,
          children: [],
          iconLink: 'reports.svg',
        },
        { type: 'page', title: 'Chats', route: '/', iconLink: 'chats.svg' },
      ],
    },
    {
      type: 'group',
      title: 'Entities',
      children: [
        {
          type: 'page',
          title: 'Activities',
          route: '/',
          iconLink: 'activities.svg',
        },
        {
          type: 'page',
          title: 'Recipes',
          route: '/',
          iconLink: 'recipes.svg',
        },
        {
          type: 'page',
          title: 'Ingredients',
          route: '/',
          iconLink: 'ingredients.svg',
        },
        {
          type: 'page',
          title: 'Uploads',
          route: '/',
          iconLink: 'uploads.svg',
        },
      ],
    },
  ];

  toggleGroup(group: MenuItem): void {
    group.collapsed = !group.collapsed;
  }
}
