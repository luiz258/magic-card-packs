import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Component, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';
import { IAppState } from '../../store/card-collection.reducer';

import { updateFilters } from '../../store/card-collection.action';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


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
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  templateUrl: './collection-filter.component.html',
  styleUrl: './collection-filter.component.scss',
})
export class CollectionFilterComponent {
  private store = inject(Store<IAppState>);
  private formBuilder = inject(FormBuilder);

  blocks: String[] = ['Amonkhet', 'Ixalan', 'Zendikar', 'Ravnica', 'Onslaught'];
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      block: ['', Validators.required, this.notNullValidator],
    });
  }

  async notNullValidator(control: any): Promise<{ [key: string]: any } | null> {
    return (await control.value) !== null
      ? null
      : { notNull: { value: control.value } };
  }

  updateFilters() {
    var queryParams = this.createFillter();
    this.store.dispatch(
      updateFilters({ payload:  queryParams })
    );
  }

  createFillter() {
    let queryString;
    const filterBlock = this.validateParams(this.form.value.block);
    const filterName = this.validateParams(this.form.value.name);

    if (filterName !== '' && filterName !== null)
      queryString = '?name=' + filterName;

    if (queryString == null && queryString == undefined) queryString = '';

    if (filterBlock !== '') queryString = queryString + '?block=' + filterBlock;

    console.log(queryString);
    return queryString;
  }

  validateParams(value: string) {
    if (value == '' && value == null) return '';

    return value;
  }
}
