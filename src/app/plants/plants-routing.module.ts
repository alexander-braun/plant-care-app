import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantGalleryComponent } from './plant-gallery/plant-gallery.component';
import { PlantProfileComponent } from './plant-profile/plant-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PlantGalleryComponent,
  },
  {
    path: ':id',
    component: PlantProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantsRoutingModule {}
