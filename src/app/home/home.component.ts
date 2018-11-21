import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselStore } from '@ngu/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageSources;

  constructor() {
    this.imageSources = [];
  }

  ngOnInit() {
    this.imageSources = [
      "assets/images/slider/1.jpg", 
      "assets/images/slider/13.jpg",
      "assets/images/slider/2.jpg",  
      "assets/images/slider/3.jpg", 
      "assets/images/slider/20.jpg", 
      "assets/images/slider/4.jpg",
      "assets/images/slider/5.jpg",
      "assets/images/slider/25.jpg",
      "assets/images/slider/24.jpg", 
      "assets/images/slider/6.jpg",  
      "assets/images/slider/10.jpg",
      "assets/images/slider/22.jpg", 
      "assets/images/slider/11.jpg", 
      "assets/images/slider/12.jpg",
      "assets/images/slider/8.jpg",
      "assets/images/slider/14.jpg",    
      "assets/images/slider/15.jpg",    
      "assets/images/slider/16.jpg",    
      "assets/images/slider/17.jpg",
      "assets/images/slider/23.jpg", 
    ];
  }

  ngOnDestroy() {
  }
}
