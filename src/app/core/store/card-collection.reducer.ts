import { Action, createReducer, on } from '@ngrx/store';
import { loadData, loadDataFailure, loadDataSuccess, updateFilters } from './card-collection.action';

export interface IAppState {
  collectionCard: any[] | null;
  filters: any;
}


export const appInitialState: IAppState = {
    collectionCard: [
      {
        name :'tes'
      }
    ],
    filters: {
      name:'tes'
    }
}

export const collectionReducer = createReducer(
  appInitialState,
  on(updateFilters, (state, {payload}) => ({
    ...state,
    filters: payload,
  })),
  on(loadDataSuccess, (state, {payload}) => ({
    ...state,
    collectionCard: payload
  })),
  on(loadDataFailure, (state, {payload}) => ({
    ...state,
    filters: payload
  })),
  on(loadData, (state) => ({
    ...state
  })),
);

