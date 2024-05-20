import { Injectable, inject } from "@angular/core";
import { DataActionTypes, updateFilters, loadData, loadDataSuccess } from './card-collection.action';
import { catchError, map, of, switchMap, tap, withLatestFrom, filter } from 'rxjs';
import { Store, select } from "@ngrx/store";
import { IAppState } from "./card-collection.reducer";
import { selectFilters } from "./card-collection.selector";
import { CollectionsService } from "../services/collections.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';

export const dataLoad = createEffect(
  (_action = inject(Actions), store = inject(Store<IAppState>), service = inject(CollectionsService)) => {
    return _action.pipe(
      ofType(DataActionTypes.UpdateFilters),
      switchMap(action =>
        service.getData(action.payload).pipe(
          map(data => {
            loadDataSuccess({payload: data})

            console.log(loadDataSuccess({payload: data}));
          })
      ))
    );
  },
  { functional: true, dispatch: false }
);

