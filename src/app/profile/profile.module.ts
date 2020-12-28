import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [UserProfileComponent, UserProfileComponent],
  imports: [CommonModule, ProfileRoutingModule],
  exports: [UserProfileComponent],
})
export class ProfileModule {}
