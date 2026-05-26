import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent implements OnInit, OnDestroy {

  interfaceSlide = {
    id: 0,
    image: '/assets/images/gallery1.png',
    preTitle: 'Welcome to',
    title: 'Third Party Inspection System<br />Water Supply Schemes, Uttarakhand',
    description: 'A transparent and technology-driven platform for end-to-end inspection, monitoring and quality assurance of water supply schemes across Uttarakhand.',
    buttonText: 'Explore Dashboard'
  };

  slides: Array<any> = [
    {
      id: 0,
      image: '/assets/images/gallery1.png',
      preTitle: 'Welcome to',
      title: 'Third Party Inspection System<br/>Water Supply Schemes, Uttarakhand',
      description: 'A transparent and technology-driven platform for end-to-end inspection, monitoring and quality assurance of water supply schemes across Uttarakhand.',
      buttonText: 'Explore Dashboard'
    },
    {
      id: 1,
      image: '/assets/images/gallery2.png',
      preTitle: 'Quality First',
      title: 'Field Inspections<br/>and Quality Assurance',
      description: 'Dedicated inspection workflows and real-time reporting to ensure compliance and accountability on the ground.',
      buttonText: 'View Inspections'
    },
    {
      id: 2,
      image: '/assets/images/gallery3.png',
      preTitle: 'Data Driven',
      title: 'Monitoring<br/>and Analytics',
      description: 'Dashboards and reports that help stakeholders monitor progress and make informed decisions.',
      buttonText: 'Open Reports'
    },
    {
      id: 3,
      image: '/assets/images/gallery4.png',
      preTitle: 'Community Focused',
      title: 'Citizen<br/>Engagement',
      description: 'Tools to capture feedback and ensure transparency with beneficiaries.',
      buttonText: 'Contact Us'
    },
    {
      id: 4,
      image: '/assets/images/gallery5.png',
      preTitle: 'Sustainable',
      title: 'Ensuring<br/>Long-term Water Security',
      description: 'Best practices and standards to build resilient water supply systems.',
      buttonText: 'Learn More'
    }
  ];

  current = 0;
  intervalMs = 5000;
  private timer: any = null;

  constructor() { }

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  get backgroundStyle() {
    const url = this.slides[this.current]?.image || '';
    return `linear-gradient(90deg, rgba(3, 32, 70, 0.92), rgba(6, 48, 94, 0.63), rgba(6, 48, 94, 0.12)), url('${url}') center/cover no-repeat`;
  }

  prev() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
    this.restartAutoplay();
  }

  next() {
    this.current = (this.current + 1) % this.slides.length;
    this.restartAutoplay();
  }

  goTo(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.current = index;
      this.restartAutoplay();
    }
  }

  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => this.next(), this.intervalMs);
  }

  stopAutoplay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  restartAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }

}
