import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-metro-city-delhi',
  templateUrl: './metro-city-delhi.component.html',
  styleUrls: ['./metro-city-delhi.component.css']
})
export class MetroCityDelhiComponent implements OnInit, OnDestroy {

  delFlightStatus = [];
  private delhiSubscription: Subscription;
  constructor(private homeService: HomeService, private appComp: AppComponent) { }

  ngOnInit() {
    this.getDelhiFlightStat();
  }

  getDelhiFlightStat() {
    this.delhiSubscription = this.appComp.delhiFlightSubject.subscribe(
      (data) => {
        console.log("subs data", data)
        this.getDelhiFlightUpdates(data);
      },
      (err) => console.log(err),
      () => console.log('Completed')
    );
  }

  getDelhiFlightUpdates(data) {
    this.delFlightStatus = [];
    data.forEach(element => {
      this.delFlightStatus.push(element)
    });
  }

  ngOnDestroy() {
    console.log("unsubscribe")
    this.delhiSubscription.unsubscribe();
  }

}
