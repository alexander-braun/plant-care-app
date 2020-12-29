import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  userPlants = [
    {
      name: 'Meine Pflanze',
      id: 932481,
      imgUrl:
        'https://bs.floristic.org/image/o/5414ef5df3cdf9e2898221243edefec21ffe670f',
      watered: [],
    },
    {
      name: 'Meine nächste Pflanze',
      id: 299324,
      imgUrl:
        'https://bs.floristic.org/image/o/dbba763d09342f393f024e8edfcd73cd2f08859f',
      watered: [],
    },
    {
      name: 'Meine andere Pflanze',
      id: 299324,
      imgUrl:
        'https://bs.floristic.org/image/o/5414ef5df3cdf9e2898221243edefec21ffe670f',
      watered: [],
    },
    {
      name: 'Meine super Pflanze',
      id: 239324,
      imgUrl:
        'https://bs.floristic.org/image/o/2710e97008d68a6b216671a7f92f4a4e50a50556',
      watered: [],
    },
    {
      name: 'Meine nächste Pflanze',
      id: 299324,
      imgUrl:
        'https://bs.floristic.org/image/o/dbba763d09342f393f024e8edfcd73cd2f08859f',
      watered: [],
    },
    {
      name: 'Meine andere Pflanze',
      id: 299324,
      imgUrl:
        'https://bs.floristic.org/image/o/5414ef5df3cdf9e2898221243edefec21ffe670f',
      watered: [],
    },
    {
      name: 'Meine super Pflanze',
      id: 239324,
      imgUrl:
        'https://bs.floristic.org/image/o/2710e97008d68a6b216671a7f92f4a4e50a50556',
      watered: [],
    },
    {
      name: 'Meine nächste Pflanze',
      id: 299324,
      imgUrl:
        'https://bs.floristic.org/image/o/dbba763d09342f393f024e8edfcd73cd2f08859f',
      watered: [],
    },
    {
      name: 'Meine andere Pflanze',
      id: 299324,
      imgUrl:
        'https://bs.floristic.org/image/o/5414ef5df3cdf9e2898221243edefec21ffe670f',
      watered: [],
    },
    {
      name: 'Meine super Pflanze',
      id: 239324,
      imgUrl:
        'https://bs.floristic.org/image/o/2710e97008d68a6b216671a7f92f4a4e50a50556',
      watered: [],
    },
    {
      name: 'Meine nächste Pflanze',
      id: 299324,
      imgUrl:
        'https://bs.floristic.org/image/o/dbba763d09342f393f024e8edfcd73cd2f08859f',
      watered: [],
    },
    {
      name: 'Meine andere Pflanze',
      id: 299324,
      imgUrl:
        'https://bs.floristic.org/image/o/5414ef5df3cdf9e2898221243edefec21ffe670f',
      watered: [],
    },
    {
      name: 'Meine super Pflanze',
      id: 932481,
      imgUrl:
        'https://bs.floristic.org/image/o/2710e97008d68a6b216671a7f92f4a4e50a50556',
      watered: [],
    },
    {
      name: 'Meine andere Pflanze',
      id: 932481,
      imgUrl:
        'https://bs.floristic.org/image/o/5414ef5df3cdf9e2898221243edefec21ffe670f',
      watered: [],
    },
    {
      name: 'Meine super Pflanze',
      id: 932481,
      imgUrl:
        'https://bs.floristic.org/image/o/2710e97008d68a6b216671a7f92f4a4e50a50556',
      watered: [],
    },
  ];
  constructor() {}

  getUsersPlants() {
    return this.userPlants;
  }
}
