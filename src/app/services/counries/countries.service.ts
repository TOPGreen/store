import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {COUNTRIES} from '../../consts/urls';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  private countries = [];

  get getCountries() {
    return this.countries;
  }

  setCountries(countries) {
    this.countries = countries;
  }

  constructor(private httpClient: HttpClient) {
  }

  getALlCountries() {
    return this.httpClient.get(`${COUNTRIES}`).subscribe(
      data => this.setCountries(data));
  }

}
