import { Routes } from '@angular/router';
import { HomeComponent } from '../nav/home/home.component';
import { ContactsComponent } from '../nav/contacts/contacts.component';
import { AnnouncementComponent } from '../nav/announcement/announcement.component';
import { AboutUsComponent } from '../nav/about-us/about-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full',
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutUsComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'announcement',
        component: AnnouncementComponent,
      },
    ],
  },
];
