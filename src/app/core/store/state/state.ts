import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { collectionFeatureReducer } from '../card-collection.reducer';
import { loadingFetureReducer } from '../loading/loading.reducer';

export const StateProviders = (): EnvironmentProviders => {
  return makeEnvironmentProviders([
    provideState(collectionFeatureReducer),
    provideState(loadingFetureReducer),
  ]);
};
