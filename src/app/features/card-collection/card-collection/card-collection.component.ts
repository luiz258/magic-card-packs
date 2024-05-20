import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { CollectionFilterComponent } from '../../../core/components/collection-filter/collection-filter.component';
import { CollectionListComponent } from '../../../core/components/collection-list/collection-list.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../core/store/card-collection.reducer';
import { selectData, selectFilters } from '../../../core/store/card-collection.selector';
import { CollectionsService } from '../../../core/services/collections.service';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [CollectionFilterComponent, CollectionListComponent],
  providers: [CollectionsService],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.scss'
})
export class CardCollectionComponent {
  data$!: Observable<any[] | null> ;
  filters$!: Observable<any>;
  list$!: Observable<any[] | null> ; ;
  constructor(
    private store: Store<IAppState>,
    private CollectionsService: CollectionsService,

  ){}
  ngOnInit() {
    this.callMethod()
  }

  callMethod(){
    console.log('tes')
    this.filters$ = this.store.select(selectFilters);
    this.list$ = this.store.select(selectData);
    // this.loadData();
  }

  loadData() {
    this.filters$.subscribe(filters => {
      console.log('filters',filters);
      this.CollectionsService.getData(filters).subscribe(
        (data:any) => {
          this.list$ = data.sets
          ;
          console.log('list',this.list$);
          // Despacha uma ação para atualizar o estado com os dados carregados
          // this.store.dispatch(new LoadDataSuccess(data));
        },
        error => {
          // Aqui você pode tratar erros, como logar ou exibir uma mensagem de erro
          console.error('Error loading data:', error);
        }
      );
    });
  }
}
