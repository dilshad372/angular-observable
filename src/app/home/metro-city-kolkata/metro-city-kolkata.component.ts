import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-metro-city-kolkata',
  templateUrl: './metro-city-kolkata.component.html',
  styleUrls: ['./metro-city-kolkata.component.css']
})
export class MetroCityKolkataComponent implements OnInit, OnDestroy {

  kolFlightStatus = [];
  private subscription: Subscription;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getKolkataflightStatus();
  }

  // get Kolkata flight status
  getKolkataflightStatus() {
    this.subscription = interval(60000)  // set interval for 60 sec
      .pipe(
        startWith(0),
        switchMap(() => this.homeService.getAllKolkataDepFl()))
      .subscribe(
        res => {
          this.kolFlightStatus = [];
          console.log("kol : : ", res);
          for (var i = res.length - 30; i > res.length - 34; i--) {
            this.kolFlightStatus.push(res[i]);
          }
        },
        err => {
          alert(err.name);
        },
        () => {
          // Do stuff after completion
        })
  }

  ngOnDestroy() {
    console.log("unsubscribe")
    this.subscription.unsubscribe();
  }
}
