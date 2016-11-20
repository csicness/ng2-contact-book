import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact/contact.form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'add', component: ContactFormComponent },
  { path: 'add/:id', component: ContactFormComponent }
];

export const routing = RouterModule.forRoot(routes);
