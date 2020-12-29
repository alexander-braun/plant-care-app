import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrefleService {
  proxyurl = 'https://cors-anywhere.herokuapp.com/';
  token = 'uJILPxT_yYF7LG8wP8FyvmfFnAwbV_2MGZ52BgeBs3I';

  constructor(private httpClient: HttpClient) {}

  getPlantById(id): Observable<any> {
    const url = 'https://trefle.io/api/v1/plants/';
    return this.httpClient
      .get(this.proxyurl + url + id + '?token=' + this.token)
      .pipe(pluck('data'));
  }

  getAllPlants(): Observable<any> {
    const url = `https://trefle.io/api/v1/plants?token=${this.token}`;
    return this.httpClient
      .get(this.proxyurl + url + '&page=1')
      .pipe(pluck('data'));
  }
}
