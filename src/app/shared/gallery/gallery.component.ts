import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

   gallery = [
    '/assets/images/gallery1.png',
    '/assets/images/gallery2.png',
    '/assets/images/gallery3.png',
    '/assets/images/gallery4.png',
    '/assets/images/gallery5.png',
    '/assets/images/gallery6.png',
  ];

  ngOnInit() {
  }

}
