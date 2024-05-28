import { IAppState, collectionKey } from './card-collection.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Selector para obter o estado completo
export const selectAppState = (state: IAppState) => state;

// Seletores para partes específicas do estado
export const selectData = createSelector(
  createFeatureSelector(collectionKey),
  (state: IAppState) => state.collectionCard
);

export const selectFilters = createSelector(
  selectAppState,
  (state: IAppState) => state.filters
);
