import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-plant-gallery',
  templateUrl: './plant-gallery.component.html',
  styleUrls: ['./plant-gallery.component.scss'],
})
export class PlantGalleryComponent implements OnInit {
  plants = [
    { id: 1, name: 'Plant 1' },
    { id: 2, name: 'Plant 2' },
    { id: 3, name: 'Plant 3' },
    { id: 4, name: 'Plant 4' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelect(plantId): void {
    this.router.navigate(['/gallery', plantId]);
  }
}
