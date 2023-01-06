import { Route } from '@angular/router';
import { CarriersComponent } from './parties/carriers/carriers.component';
import { ClientsComponent } from './parties/clients/clients.component';
import { ForwardersComponent } from './parties/forwarders/forwarders.component';
import { ManufacturersComponent } from './parties/manufacturers/manufacturers.component';
import { PartiesComponent } from './parties/parties.component';
import { VendorsComponent } from './parties/vendors/vendors.component';

export const partiesRoutes: Route[] = [
  { path: '', component: PartiesComponent },
  { path: 'carriers', component: CarriersComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'manufacturers', component: ManufacturersComponent},
  { path: 'vendors', component: VendorsComponent},
  { path: 'forwarders', component: ForwardersComponent}
];
