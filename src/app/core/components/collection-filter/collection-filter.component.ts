import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/card-collection.reducer';
import { CollectionsService } from '../../services/collections.service';
import { loadData, updateFilters } from '../../store/card-collection.action';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { selectFilters } from '../../store/card-collection.selector';
import { Observable, catchError, map, of, switchMap, filter } from 'rxjs';

@Component({
  selector: 'app-collection-filter',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule, CommonModule
  ],
  providers: [],
  templateUrl: './collection-filter.component.html',
  styleUrl: './collection-filter.component.scss'
})
export class CollectionFilterComponent {
  @Output() dataEvent = new EventEmitter<string>();
  blocks: String[] = ["Amonkhet", "Ixalan", "Zendikar", "Ravnica", "Onslaught"];
  form!: FormGroup;
  filter$!: Observable<any | null> ;
  constructor(
    private store: Store<IAppState>,
    private collectionsService: CollectionsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.store.dispatch(updateFilters({payload: 'Amonkhet'}));

    this.form = this.formBuilder.group({
      name: new FormControl(),
      block: new FormControl([Validators.required, this.notNullValidator]),
    });
  }

  notNullValidator(control: any): { [key: string]: any } | null {
    return control.value !== null ? null : { 'notNull': { value: control.value } };
  }


  updateFilters() {
    var queryParams = this.createFillter();
     this.store.dispatch(updateFilters({payload: {filter:queryParams, list: null}}));
    // this.store.dispatch(loadData());

    this.dataEvent.emit();
  }

  createFillter() {
    let queryString;
    const filterBlock = this.validateParams(this.form.value.block);
    const filterName = this.validateParams(this.form.value.name);

    if (filterName !== '' && filterName !== null) queryString = '?name=' + filterName;

    if (queryString == null && queryString == undefined) queryString = '';

    if (filterBlock !== '') queryString = queryString + '?block=' + filterBlock;

    console.log(queryString);
    return queryString;
  };

  validateParams(value: string) {
    if (value == '' && value == null) return '';

    return value;

  }

}
