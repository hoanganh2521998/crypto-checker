import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // get data list
  getCurrencyData(currency: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }
  // get trending coin list
  getTrendingCurrency(currency: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
  }

  // get 1 coin info for chart
  getGraphicalData(coinId: string, currency: string, days: number) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`);
  }
  // get 1 coin info for detail
  getCurrencyById(coinId: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  }
}
