import { Route } from '@angular/router';
import { CarriersComponent } from './parties/carriers/carriers.component';
import { ClientsComponent } from './parties/clients/clients.component';
import { ForwardersComponent } from './parties/forwarders/forwarders.component';
import { ManufacturersComponent } from './parties/manufacturers/manufacturers.component';
import { PartiesComponent } from './parties/parties.component';
import { VendorsComponent } from './parties/vendors/vendors.component';

export const partiesRoutes: Route[] = [
  { path: '', component: PartiesComponent },
  { path: 'carriers', pathMatch: 'full', component: CarriersComponent },
  { path: 'clients', pathMatch: 'full', component: ClientsComponent },
  {
    path: 'manufacturers',
    pathMatch: 'full',
    component: ManufacturersComponent,
  },
  { path: 'vendors', pathMatch: 'full', component: VendorsComponent },
  { path: 'forwarders', pathMatch: 'full', component: ForwardersComponent },
];
