import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  blrflightStat = [];
  mumFlightStatus = [];
  delFlightStatus = [];
  kolFlightStatus = [];

  mumSubscription: Subscription;
  delhiSubscription: Subscription;
  kolkataSubscription: Subscription;
  subscription: Subscription;
  public bangloreFlightSubject: Subject<any> = new Subject();
  public delhiFlightSubject: Subject<any> = new Subject();
  public mumbaiFlightSubject: Subject<any> = new Subject();
  public kolkataFlightSubject: Subject<any> = new Subject();

  constructor(private homeService: HomeService) {
    console.log("App constructor executed")

  }


  ngOnInit() {
    console.log("ng onInit")
    this.getBangaloreFlightStatus();
    this.getDelhiFlightStatus();
    this.getMumbaiFlightStatus();
    this.getKolkataFlightStatus();

  }

  getBangaloreFlightStatus() {
    this.subscription = interval(60000)   // set interval for 60 sec
      .pipe(
        startWith(0),
        switchMap(() => this.homeService.getAllBangloreDepFl())).subscribe(
          next => {
            this.getBangUpdates(next);
          },
          err => this.bangloreFlightSubject.error(err),
          () => this.bangloreFlightSubject.complete()

        )
  }

  getBangUpdates(res) {
    this.blrflightStat = [];
    for (var i = 0; i < 4; i++) {
      this.blrflightStat.push(res[i]);
      this.bangloreFlightSubject.next(this.blrflightStat)
    }
  }


  getDelhiFlightStatus() {
    this.subscription = interval(60000)  // set interval for 60 sec
      .pipe(
        startWith(0),
        switchMap(() => this.homeService.getAllDelhiDepFl())).subscribe(
          next => {
            this.getDelhiUpdates(next);
          },
          err => this.delhiFlightSubject.error(err),
          () => this.delhiFlightSubject.complete()

        )
  }
  getDelhiUpdates(res) {
    this.delFlightStatus = [];
    for (var i = 0; i < 4; i++) {
      this.delFlightStatus.push(res[i]);
      this.delhiFlightSubject.next(this.delFlightStatus)
    }
  }


  getMumbaiFlightStatus() {
    this.subscription = interval(60000)  // set interval for 60 sec
      .pipe(
        startWith(0),
        switchMap(() => this.homeService.getAllMumbaiDepFl())).subscribe(
          next => {
            this.getMumUpdates(next)
          },
          err => this.mumbaiFlightSubject.error(err),
          () => this.mumbaiFlightSubject.complete()

        )
  }

  getMumUpdates(res) {
    this.mumFlightStatus = [];
    for (var i = 0; i < 4; i++) {
      this.mumFlightStatus.push(res[i]);
      this.mumbaiFlightSubject.next(this.mumFlightStatus)
    }
  }

  getKolkataFlightStatus() {
    this.subscription = interval(60000)  // set interval for 60 sec
      .pipe(
        startWith(0),
        switchMap(() => this.homeService.getAllKolkataDepFl())).subscribe(
          next => {
            this.getKolUpdates(next)
          },
          err => this.mumbaiFlightSubject.error(err),
          () => this.mumbaiFlightSubject.complete()

        )
  }

  getKolUpdates(res) {
    this.kolFlightStatus = [];
    for (var i = 0; i < 4; i++) {
      this.kolFlightStatus.push(res[i]);
      this.kolkataFlightSubject.next(this.kolFlightStatus)
    }
  }

  // unsubscribing the subcribe when not using the component.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
