import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-plant-gallery',
  templateUrl: './plant-gallery.component.html',
  styleUrls: ['./plant-gallery.component.scss'],
})
export class PlantGalleryComponent implements OnInit {
  plants;

  constructor(private router: Router, private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plants = this.plantsService.getUsersPlants();
  }

  onSelect(plantId): void {
    this.router.navigate(['/gallery', plantId]);
  }
}
