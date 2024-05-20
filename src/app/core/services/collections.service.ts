import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private http: HttpClient) { }
  getData(filters: any): Observable<any> {
    console.log({ params: filters});
    console.log({ params: filters});
    return this.http.get<any[]>('https://api.magicthegathering.io/v1/sets'+ filters)
      .pipe(
        tap((res:any) => {
          console.log('#service', res.sets);
          return res?.sets
        }),
        catchError(error => {
          console.error('Error fetching data:', error);
          throw error;
        })
      );
  }
}
