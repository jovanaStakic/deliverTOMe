import { Injectable } from '@angular/core';
import { Meal } from '../meal';
import { MealComponent } from '../meal/meal.component';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor() { }
  meals: Meal[]=[
    {
      title: "Američke palačinke",
      deliveryTime: 25,
      picture: "../../assets/img/americkePalacinke.jpg",
      price: 599,
      desription: "Porcija pravih američkih palaćinki sa eurokremom i malinom uz dodatak preliva od karamele.",
      stars: 8.6 
    },
    {
      title: "Giros",
      deliveryTime: 15,
      picture: "../../assets/img/giros.png",
      price: 350,
      desription: "Pileći giros sa prilozima i pomfritom u tortilji.",
      stars: 8.2 
    },
    {
      title: "Morski plodovi",
      deliveryTime: 45,
      picture: "../../assets/img/morskiPlodovi.jpg",
      price:2490,
      desription: "Porciija morskih plodova sa rizotom od integralnog pirinča u maslinovom ulju.",
      stars: 7.8 
    },
    {
      title: "Pljeskavica",
      deliveryTime: 30,
      picture: "../../assets/img/pljeskavica.jpg",
     price: 390,
      desription: "Pljeskavica od 250g sa prilozima.",
      stars: 9.1 
    },
    {
      title: "Punjena paprika",
      deliveryTime: 45,
      picture: "../../assets/img/punjenaPaprika.jpeg",
      price: 700,
      desription: "Domaća punjena papirka sa sosom.",
      stars: 9.8 
    },
    {
      title: "Kaprićoza",
      deliveryTime: 40,
      picture: "../../assets/img/picaKapricoza.jpg",
      price: 1290,
      desription: "Pica sa šunkom, pečurkama  i kačkavaljem.",
      stars: 7.2 
    }
  ];
}
