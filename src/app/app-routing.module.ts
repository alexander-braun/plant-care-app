import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantProfileComponent } from './plants/plant-profile/plant-profile.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
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
    component: UserProfileComponent,
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
