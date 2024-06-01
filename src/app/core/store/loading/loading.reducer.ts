import { createFeature, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { getLoading, toggleLoading } from "./loading.action";


export interface ILoadingState{
  isloading: boolean;
}

export const loadingInitialState: ILoadingState ={
  isloading: false,
}

export const loadingKey = 'loading';

export const loadingFetureReducer = createFeature({
  name: loadingKey,
  reducer: createReducer(
    loadingInitialState,
    on(toggleLoading, (state, { onloading }) => ({
      ...state,
      isloading: onloading
    })),
    on(getLoading, (state) => ({
      ...state,
    }))
  ),
});


export const selectLoading = createSelector(
  createFeatureSelector(loadingKey),
  (state: ILoadingState) => state.isloading
);
