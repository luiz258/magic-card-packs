import { Injectable, inject } from '@angular/core';
import {
  loadDataSuccess,
  loadDataFailure,
  DataActionTypes,
  updateFilters,
} from './card-collection.action';
import {
  catchError,
  map,
  of,
  switchMap,
  tap,
  withLatestFrom,
  filter,
  mergeMap,
  from,
  Observable,
} from 'rxjs';
import { Action, Store, select } from '@ngrx/store';
import { IAppState } from './card-collection.reducer';
import { CollectionsService } from '../services/collections.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class CardCollectionEffects {
  constructor(
    private actions$: Actions,
    private service: CollectionsService,
    private store: Store<IAppState>
  ) {}

  // loadCollectionData$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(DataActionTypes.UpdateFilters),
  //     switchMap((filter: any) =>
  //        this.service.getData(filter.payload).pipe(
  //         map(data =>{
  //           this.store.dispatch(loadDataSuccess(data))
  //           return data;}
  //         )
  //       )
  //   ))
  // })

  loadCollectionData$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DataActionTypes.UpdateFilters),
        mergeMap((filtro: any) =>
          from(
            this.service.getData(filtro.filter).pipe(
              map((data) => {
                // this.store.dispatch(updateFilters( {payload: {filter:filtro.filter, list: data.sets}}))
                this.store.dispatch(loadDataSuccess({ payload: data.sets }));

                return data.sets;
              })
            )
          )
        )
      );
    },
    { functional: true, dispatch: false }
  );
  //   loadCollectionData$  = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(DataActionTypes.UpdateFilters),
  //       // tap(() => this.store.dispatch(LoadingAction.loading({ message: true }))),
  //       mergeMap(({ filter }) =>
  //         from(

  //           // catchError((err: HttpErrorResponse): Observable<any> => {
  //           //   this.store.dispatch(LoadingAction.loading({ message: false }));
  //           //   this.store.dispatch(
  //           //     MessageAction.sendMessage({
  //           //       message: {
  //           //         severity: 'Error',
  //           //         detail: Autentição não executada
  //           //       }
  //           //     })
  //           //   );
  //           //   return of(LoginApiActions.loginFailure({ error: err }));
  //           // })
  //         )
  //       )
  //     )
  //   );
}
