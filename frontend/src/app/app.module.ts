import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './components/views/home/home.component';
import { ContentComponent } from './components/template/content/content.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { AgendaComponent } from './components/views/agenda/agenda.component';
import { BarbersComponent } from './components/views/barbers/barbers.component';
import { OrdersComponent } from './components/views/orders/orders.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { AddressComponent } from './components/views/address/address.component';
import { RegisterComponent } from './components/views/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ProfileComponent } from './components/views/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent,
    AgendaComponent,
    BarbersComponent,
    OrdersComponent,
    ContactComponent,
    AddressComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatRippleModule

  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
