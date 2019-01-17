import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-metro-city-kolkata',
  templateUrl: './metro-city-kolkata.component.html',
  styleUrls: ['./metro-city-kolkata.component.css']
})
export class MetroCityKolkataComponent implements OnInit, OnDestroy {

  kolFlightStatus = [];
  private kolkatFlightSubscription: Subscription;
  constructor(private homeService: HomeService, private appComp: AppComponent) { }

  ngOnInit() {
    this.getKolkataFlightStat();
  }


  getKolkataFlightStat() {
    this.kolkatFlightSubscription = this.appComp.kolkataFlightSubject.subscribe(
      (data) => {
        console.log("subs data", data)
        this.getKolkataFlightUpdates(data);
      },
      (err) => console.log(err),
      () => console.log('Completed')
    );
  }

  getKolkataFlightUpdates(data) {
    this.kolFlightStatus = [];
    data.forEach(element => {
      this.kolFlightStatus.push(element)
    });
  }

  ngOnDestroy() {
    console.log("unsubscribe")
    this.kolkatFlightSubscription.unsubscribe();
  }
}
