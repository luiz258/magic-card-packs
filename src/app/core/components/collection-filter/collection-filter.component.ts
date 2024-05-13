import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-collection-filter',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule, MatButtonModule],
  templateUrl: './collection-filter.component.html',
  styleUrl: './collection-filter.component.scss'
})
export class CollectionFilterComponent {

}
