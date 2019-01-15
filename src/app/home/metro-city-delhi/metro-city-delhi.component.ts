import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-metro-city-delhi',
  templateUrl: './metro-city-delhi.component.html',
  styleUrls: ['./metro-city-delhi.component.css']
})
export class MetroCityDelhiComponent implements OnInit, OnDestroy {

  delFlightStatus = [];
  private subscription: Subscription;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getDelhiflightStatus();
  }

  // get Delhi flight status
  getDelhiflightStatus() {
    this.subscription = interval(60000)  // set interval for 60 sec
      .pipe(
        startWith(0),
        switchMap(() => this.homeService.getAllDelhiDepFl())).subscribe(
          res => {
            this.delFlightStatus = [];
            console.log("del : : ", res);
            for (var i = res.length - 30; i > res.length - 34; i--) {
              this.delFlightStatus.push(res[i]);
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
