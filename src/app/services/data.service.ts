import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url: string;
  public data$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  searchCompany() {
    return this.http
      .get(this.url + '/fetchStock')
      .toPromise()
      .catch()
  }

  getData() {
    this.searchCompany().then(data => {
      this.setData(data)
    }).catch(err => {
      console.log(err)
    })
  }

  setData(data) {
    console.log(data)
    this.data$.next(data);
  }
  searchCompanyStockData(data) {
    return this.http
      .post(this.url + '/stock', data)
      .toPromise()
      .catch()
  }
}
