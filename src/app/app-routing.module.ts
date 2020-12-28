import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantProfileComponent } from './plants/plant-profile/plant-profile.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./plants/plants.module').then((m) => m.PlantsModule),
  },
  {
    path: 'profile',
    component: PlantProfileComponent,
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
