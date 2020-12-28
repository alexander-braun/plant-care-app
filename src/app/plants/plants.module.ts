import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantGalleryComponent } from './plant-gallery/plant-gallery.component';
import { PlantProfileComponent } from './plant-profile/plant-profile.component';



@NgModule({
  declarations: [PlantGalleryComponent, PlantProfileComponent],
  imports: [
    CommonModule
  ]
})
export class PlantsModule { }
