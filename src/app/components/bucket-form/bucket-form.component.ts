import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/counries/countries.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CurrenciesService} from '../../services/currencies/currencies.service';
import {BucketService} from '../../services/bucket/bucket.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bucket-form',
  templateUrl: './bucket-form.component.html',
  styleUrls: ['./bucket-form.component.css']
})
export class BucketFormComponent implements OnInit {

  get countries() {
    return this.countriesService.getCountries;
  }

  orderForm: FormGroup;

  constructor(private countriesService: CountriesService, private currenciesService: CurrenciesService,
              private bucketService: BucketService) {
    this.orderForm = new FormGroup({
      currencyCode: new FormControl('RUB', []),
      address: new FormControl(null, [Validators.required]),
      client: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
    this.orderForm.get('currencyCode').valueChanges.subscribe(value => {
      this.currenciesService.getNewRate(value);
    });

    window.onbeforeunload = () => {
      localStorage.setItem('form', JSON.stringify(this.orderForm.value));
      localStorage.setItem('bucket', JSON.stringify(this.bucketService.getItems));
      console.log(localStorage);
    };
  }

  ngOnInit(): void {
    const formValue = JSON.parse(localStorage.getItem('form'));
    if (formValue.currencyCode !== '') {
      console.log(localStorage);
      this.orderForm.patchValue({
          currencyCode: formValue.currencyCode,
          address: formValue.address,
          client: formValue.client,
          email: formValue.email,
        }
      );
    }
    this.countriesService.getALlCountries();
    if (this.bucketService.getItems.length < 1) {
      console.log(localStorage);
      this.bucketService.setBucket(JSON.parse(localStorage.getItem('bucket')));
    }
  }

  onSubmit() {
    if (this.bucketService.getItems.length === 0) {
      alert('Добавьте товар в корзину');
      return;
    }
    if (this.orderForm.valid) {
      alert('Ваш заказ принят!');
      this.bucketService.clearBucket();
    }
  }

}
