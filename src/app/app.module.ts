import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MealComponent } from './meal/meal.component';
import { OrderComponent } from './order/order.component';
import { PricePipe } from './pipe/price.pipe';
import { BackgroundDirectiveDirective } from './directive/background-directive.directive';
import { PorudzbinaComponent } from './porudzbina/porudzbina.component';
import { NotReadyYetComponent } from './not-ready-yet/not-ready-yet.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MealComponent,
    OrderComponent,
    PricePipe,
    BackgroundDirectiveDirective,
    PorudzbinaComponent,
    NotReadyYetComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
