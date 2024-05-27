import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError, filter, map, tap } from 'rxjs';
import { IAppState } from '../store/card-collection.reducer';
import { loadDataSuccess } from '../store/card-collection.action';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private http: HttpClient,  private store: Store<IAppState>) { }
  getData(filters: any): Observable<any> {
    return this.http.get<any[]>('https://api.magicthegathering.io/v1/sets?page=1&pageSize=30'+ filters)
      .pipe(
        tap((res:any) => {
           const list = res?.sets;
          // console.log(loadDataSuccess(list) )
          //  this.store.dispatch(loadDataSuccess(list));
          return res?.sets
          // this.store.dispatch(updateFilters({payload: filter.payload }));
        }),
        catchError(error => {
          console.error('Error fetching data:', error);
          throw error;
        })
      );
  }
}
