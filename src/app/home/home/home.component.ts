import { Component, OnInit } from '@angular/core';
import { PlantsService } from 'src/app/plants/plants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  date = new Date();
  daysThisMonth: number;
  daysArr: number[];
  plants;

  constructor(private plantsService: PlantsService) {
    this.plants = plantsService.getUsersPlants();
    this.daysThisMonth = this.calcDaysThisMonth();
    this.daysArr = [...Array(this.daysThisMonth).keys()];
  }

  calcDaysThisMonth(): number {
    return new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDate();
  }

  ngOnInit(): void {
    console.log(this.daysArr);
  }

  log(day, plant) {
    console.log('watered', plant, day);
  }
}
