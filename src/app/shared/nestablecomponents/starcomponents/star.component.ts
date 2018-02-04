import { Component, Input, OnChanges } from '@angular/core';


@Component({
// tslint:disable-next-line:component-selector
selector: 'pm-star',
templateUrl: './star.component.html',
styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  rating = 4;
  starWidth:  number;
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }
}
