import { Routes } from '@angular/router';
import { CardCollectionComponent } from './features/card-collection/card-collection/card-collection.component';
import { OpenPackageListComponent } from './features/open-package/open-package-list/open-package-list.component';

export const routes: Routes = [
  { path: '', component: CardCollectionComponent },
  { path: 'open-collection', component: OpenPackageListComponent },
];
