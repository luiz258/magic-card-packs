import { Action, createAction, props } from "@ngrx/store";
export enum DataActionTypes {
  UpdateFilters = '[Data] Update Filters',
  LoadData = '[Data] Load Data',
  LoadDataSuccess = '[Data] Load Data Success',
  LoadDataFailure = '[Data] Load Data Failure',
}

export const updateFilters = createAction(
  DataActionTypes.UpdateFilters,
  props<{ payload:any }>()
);

export const loadData = createAction(
  DataActionTypes.LoadData);

export const loadDataSuccess = createAction(
  DataActionTypes.LoadDataSuccess,
  props<{ payload:any }>()
);

export const loadDataFailure = createAction(
  DataActionTypes.LoadDataFailure,
  props<{ payload:any }>()
);

