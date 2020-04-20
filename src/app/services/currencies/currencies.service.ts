import {Injectable} from '@angular/core';
import {COUNTRIES, CURRENCY} from '../../consts/urls';
import {HttpClient} from '@angular/common/http';
import {BucketService} from '../bucket/bucket.service';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  private rate = 1;
  private currencyCode = 'RUB';

  cashe = {};

  get getRate() {
    return this.rate;
  }

  setRate(rate: number) {
    this.rate = rate;
    this.bucketService.updateSum();
  }

  get getCurrencyCode() {
    return this.currencyCode;
  }

  setCurrencyCode(currencyCode: string) {
    this.currencyCode = currencyCode;
  }

  constructor(private httpClient: HttpClient, private bucketService: BucketService) {
    this.getNewRate('RUB');
  }

  getNewRate(currencyCode) {

    if (this.cashe.hasOwnProperty(currencyCode)) {
      this.setCurrencyCode(currencyCode);
      this.setRate(this.cashe[currencyCode]);
    }
    return this.httpClient.get(`${CURRENCY}${currencyCode}`).subscribe(
      (data: any) => {
        this.setCurrencyCode(currencyCode);
        this.setRate(data.rates[currencyCode]);
        this.cashe[currencyCode] = data.rates[currencyCode];
      }, (err) => {
        this.setCurrencyCode('USD');
        this.setRate(1);
      });
  }


}
