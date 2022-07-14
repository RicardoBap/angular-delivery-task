import { Directive, HostBinding, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Directive({
  selector: '[preLoaded]',
})
export class PreLoadDirective implements OnInit {

  @HostBinding('style.display') display: string = '';

  ngOnInit() {

    of(true)
      .pipe(
        delay(2000),
        tap(() => {
          this.display = 'none'
        })
      ).subscribe();
  }

}
