import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription, interval, Subject, BehaviorSubject } from 'rxjs';
import { startWith, switchMap, distinctUntilChanged, tap } from 'rxjs/operators';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-metro-city-bangalore',
  templateUrl: './metro-city-bangalore.component.html',
  styleUrls: ['./metro-city-bangalore.component.css']
})
export class MetroCityBangaloreComponent implements OnInit, OnDestroy {

  blrflightStat = [];
  private bangSubscription : Subscription;

  constructor(private homeService: HomeService,private appComp: AppComponent) { }

  ngOnInit() {

    this.getBangloreFlightStat();
  }

  getBangloreFlightStat() {
  this.bangSubscription = this.appComp.bangloreFlightSubject.subscribe(
    (data) => {console.log("subs data", data)
    this.getBangaloreFlightUpdates(data);
  },
    (err) => console.log(this.appComp.bangloreFlightSubject.error(err)),
    () => console.log(this.appComp.bangloreFlightSubject.complete())
  );
}

getBangaloreFlightUpdates(data){
this.blrflightStat = [];
data.forEach(element => {
  this.blrflightStat.push(element)
});
}

  ngOnDestroy() {
    console.log("unsubscribe")
    this.bangSubscription.unsubscribe();
  }

}
