import {Injectable} from '@angular/core';
import {IItemsApiService} from '../../interfaces/IItemsApi';
import {Observable} from 'rxjs';
import {Item} from '../../interfaces/Item';
import {HttpClient} from '@angular/common/http';
import {HOST} from '../../consts/urls';

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService implements IItemsApiService {

  constructor(private httpClient: HttpClient) {
  }

  add(entity: Item): Observable<void> {
    return undefined;
  }

  delete(id: number): Observable<void> {
    return undefined;
  }

  getAll(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`${HOST}`);
  }
}
