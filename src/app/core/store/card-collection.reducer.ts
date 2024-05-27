import { Action, createReducer, on } from '@ngrx/store';
import { loadData, loadDataFailure, loadDataSuccess, updateFilters } from './card-collection.action';

import * as actions from './card-collection.action';
export interface IAppState {
  collectionCard: any[] | null;
  filters: any;
}


export const appInitialState: IAppState = {
    collectionCard: null,
    filters: null
}

  const collectionReducer = createReducer(
  appInitialState,
  on(updateFilters, (state, {payload}) => ({
    ...state,
    filters: payload.filter,
    collectionCard: payload.list
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

export function dataReducer(state:any, action:any) {
  return collectionReducer(state, action);
}
