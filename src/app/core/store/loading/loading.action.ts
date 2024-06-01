import { loadData } from './../card-collection.action';
import { createAction, props } from "@ngrx/store";

export enum actionsType {
  toggleLoading = '[Loading] Toggle Loading',
  getLoading = '[Loading] Get Loading'
}

export const toggleLoading = createAction(
  actionsType.toggleLoading,
  props<{ onloading: boolean  }>()
);

export const getLoading = createAction(
  actionsType.getLoading);
