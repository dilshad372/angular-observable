import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { interval, Subject, Subscription, } from 'rxjs';
import { takeUntil, switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  callDuration;
  private subscription: Subscription;
  constructor(private homeService: HomeService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.callDuration = this.elementRef.nativeElement.querySelector('#time');
    this.startTimer(this.callDuration);

  }

  startTimer(display) {
    var timer = 60;
    var minutes;
    var seconds;

    this.subscription = interval(1000).subscribe(x => {
      seconds = Math.floor(timer % 60);

      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = seconds;

      --timer;
      if (--timer === 0) {
        console.log('timeup: ', timer);
        timer = 60;
      }
    })
  }

  ngOnDestroy() {
    console.log("unsubscribe")
    this.subscription.unsubscribe();
  }

}
