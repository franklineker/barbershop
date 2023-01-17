import { RegisterComponent } from './components/views/register/register.component';
import { AddressComponent } from './components/views/address/address.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { OrdersComponent } from './components/views/orders/orders.component';
import { BarbersComponent } from './components/views/barbers/barbers.component';
import { AgendaComponent } from './components/views/agenda/agenda.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/views/profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "agenda",
    component: AgendaComponent
  },
  {
    path: "barbers",
    component: BarbersComponent
  },
  {
    path: "orders",
    component: OrdersComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "address",
    component: AddressComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
