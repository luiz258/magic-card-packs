import { Action, createFeature, createReducer, on } from '@ngrx/store';
import {
  loadData,
  loadDataFailure,
  loadDataSuccess,
  updateFilters,
} from './card-collection.action';

import * as actions from './card-collection.action';
import { filter } from '../interfaces/filter.interface';
import { collectionCard } from '../interfaces/collection.interface';
export interface IAppState {
  collectionCard: collectionCard[] | null;
  filters: filter | null;
}

export const appInitialState: IAppState = {
  collectionCard: null,
  filters: null,
};
export const collectionKey = 'collection';
export const collectionFeatureReducer = createFeature({
  name: collectionKey,
  reducer: createReducer(
    appInitialState,
    on(updateFilters, (state, { payload }) => ({
      ...state,
      filters: payload,
    })),
    on(loadDataSuccess, (state, { payload }) => ({
      ...state,
      collectionCard: payload,
    })),
    on(loadDataFailure, (state, { payload }) => ({
      ...state,
      filters: payload,
    })),
    on(loadData, (state) => ({
      ...state,
    }))
  ),
});
