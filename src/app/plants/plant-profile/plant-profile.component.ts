import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrefleService } from '../trefle.service';

@Component({
  selector: 'app-plant-profile',
  templateUrl: './plant-profile.component.html',
  styleUrls: ['./plant-profile.component.scss'],
})
export class PlantProfileComponent implements OnInit {
  data;
  route;
  imageUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private trefleService: TrefleService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
    const id = this.activatedRoute.snapshot.params.id;
    this.trefleService.getPlantById(id).subscribe((data) => {
      this.imageUrl = data.image_url;
    });
    this.route = this.activatedRoute.snapshot.params.id;
  }
}
