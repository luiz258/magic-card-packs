import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { collectionFeatureReducer } from '../card-collection.reducer';

export const StateProviders = (): EnvironmentProviders => {
  return makeEnvironmentProviders([provideState(collectionFeatureReducer)]);
};
