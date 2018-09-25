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
    /* this.imageSources = [
      "assets/images/slider/1.jpg",
      "assets/images/slider/2.jpg",
      "assets/images/slider/3.jpg",
      "assets/images/slider/4.jpg",
      "assets/images/slider/5.jpg",
      "assets/images/slider/6.jpg",
      "assets/images/slider/7.jpg",
      "assets/images/slider/8.jpg",
      "assets/images/slider/9.jpg",
      "assets/images/slider/10.jpg",
      "assets/images/slider/11.jpg"
    ]; */
  }

  ngOnInit() {
    this.imageSources = [
      /* "assets/images/slider/1.jpg",
      "assets/images/slider/2.jpg",
      "assets/images/slider/3.jpg",
      "assets/images/slider/4.jpg",
      "assets/images/slider/5.jpg",
      "assets/images/slider/7.jpg",
      "assets/images/slider/9.jpg",
      "assets/images/slider/11.jpg" */
      "assets/images/slider/rsz_11.jpg",
      "assets/images/slider/8.jpg",
      "assets/images/slider/10.jpg",
      "assets/images/slider/6.jpg",
      "assets/images/slider/rsz_15.jpg",
    ];
  }

  ngOnDestroy() {
  }
}
