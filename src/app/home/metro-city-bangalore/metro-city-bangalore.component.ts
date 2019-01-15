import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-metro-city-bangalore',
  templateUrl: './metro-city-bangalore.component.html',
  styleUrls: ['./metro-city-bangalore.component.css']
})
export class MetroCityBangaloreComponent implements OnInit, OnDestroy {

  blrflightStatus = [];
  private subscription: Subscription;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getBangaloreflightStatus();
  }

  // get Bangalore flight status 
  getBangaloreflightStatus() {
    this.subscription = interval(60000)   // set interval for 60 sec
      .pipe(
        startWith(0),
        switchMap(() => this.homeService.getAllBangloreDepFl())).subscribe(
          res => {
            this.blrflightStatus = [];
            console.log("blr : : ", res.length - 1, res.length - 5);
            for (var i = res.length - 30; i > res.length - 34; i--) {
              this.blrflightStatus.push(res[i]);
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
