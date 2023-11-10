import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private geturl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  constructor(privatehttp: HttpClient) { }
}
