import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <input class="form-control" type="search" [formControl]="searchControl" />
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'observables-example';
  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        filter((text) => text.length >= 3),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
