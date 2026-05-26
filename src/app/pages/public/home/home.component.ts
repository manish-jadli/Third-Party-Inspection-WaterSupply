import { Component, OnInit } from '@angular/core';
import { HeroCarouselComponent } from '../../../shared/hero-carousel/hero-carousel.component';
import { FeatureCardsComponent } from '../../../shared/feature-cards/feature-cards.component';
import { StatsComponent } from '../../../shared/stats/stats.component';
import { GalleryComponent } from '../../../shared/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeroCarouselComponent, FeatureCardsComponent, StatsComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
