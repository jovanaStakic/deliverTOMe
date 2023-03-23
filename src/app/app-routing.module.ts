import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotReadyYetComponent } from './not-ready-yet/not-ready-yet.component';
import { OrderComponent } from './order/order.component';
import { PorudzbinaComponent } from './porudzbina/porudzbina.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'poruci',component: OrderComponent},
  {path: 'porudzbina',component: PorudzbinaComponent},
  {path: 'kontakt',component:NotReadyYetComponent},
  {path: '**',component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
