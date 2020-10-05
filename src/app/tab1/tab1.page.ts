import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sliderFood = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 1,
  }

  sliderInfo = {
    slidesPerView: 1.1,
    spaceBetween: 10,
    centeredSlides: true,
  }

  cards = [
    {
      img: 'https://cdn.pixabay.com/photo/2017/03/26/11/53/food-platter-2175326_960_720.jpg',
      title: 'Appetizer'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/food-1245955_960_720.jpg',
      title: 'Biscuits'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_960_720.jpg',
      title: 'Fruits'
    },
  ];

  constructor() {}

}
