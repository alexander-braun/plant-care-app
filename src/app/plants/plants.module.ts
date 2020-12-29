import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantGalleryComponent } from './plant-gallery/plant-gallery.component';
import { PlantProfileComponent } from './plant-profile/plant-profile.component';
import { PlantsRoutingModule } from './plants-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PlantGalleryComponent, PlantProfileComponent],
  imports: [CommonModule, PlantsRoutingModule, HttpClientModule],
  exports: [PlantGalleryComponent, PlantProfileComponent],
})
export class PlantsModule {}
