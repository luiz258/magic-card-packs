import { async } from '@angular/core/testing';
import { ILoadingState, selectLoading } from './../../store/loading/loading.reducer';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if((isLoading$ | async)){
    <div class="container">
      <span class="loader"></span>
    </div>
    }
  `,
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent implements OnInit {
  private store = inject(Store<ILoadingState>);

  isLoading$!: Observable<boolean>;

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectLoading);
  }
}
