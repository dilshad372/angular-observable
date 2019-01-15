import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-metro-city-mumbai',
  templateUrl: './metro-city-mumbai.component.html',
  styleUrls: ['./metro-city-mumbai.component.css']
})
export class MetroCityMumbaiComponent implements OnInit, OnDestroy {

  mumFlightStatus = [];
  private subscription: Subscription;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getMumbaiflightStatus();
  }


  // get Mumbai flight status
  getMumbaiflightStatus() {
    this.subscription = interval(60000)  // set interval for 60 sec
      .pipe(
        startWith(0),
        switchMap(() => this.homeService.getAllMumbaiDepFl())).subscribe(
          res => {
            this.mumFlightStatus = [];
            console.log("mum : : ", res);
            for (var i = res.length - 30; i > res.length - 34; i--) {
              this.mumFlightStatus.push(res[i]);
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
