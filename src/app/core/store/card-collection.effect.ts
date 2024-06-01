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
import { ILoadingState } from './loading/loading.reducer';
import { toggleLoading } from './loading/loading.action';

@Injectable()
export class CardCollectionEffects {
  constructor(
    private actions$: Actions,
    private service: CollectionsService,
    private store: Store<IAppState>,
    private storeLoading: Store<ILoadingState>
  ) {}

  loadCollectionData$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DataActionTypes.UpdateFilters),
        tap(() => {
          this.storeLoading.dispatch(toggleLoading({ onloading: true }));
        }),
        mergeMap((filter: any) =>
          from(
            this.service.getData(filter.payload).pipe(
              map((data) => {
                this.store.dispatch(loadDataSuccess({ payload: data.sets }));
                return data.sets;
              })
            )
          )
        ),
        tap(() => {
          this.storeLoading.dispatch(toggleLoading({ onloading: false }));
        })
      );
    },
    { functional: true, dispatch: false }
  );
}
