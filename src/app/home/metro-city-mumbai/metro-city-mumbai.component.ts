import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-metro-city-mumbai',
  templateUrl: './metro-city-mumbai.component.html',
  styleUrls: ['./metro-city-mumbai.component.css']
})
export class MetroCityMumbaiComponent implements OnInit, OnDestroy {

  mumFlightStatus = [];
  private mumFlightSubscription: Subscription;
  constructor(private homeService: HomeService, private appComp: AppComponent) { }

  ngOnInit() {
    this.getMumbaiFlightStat();
  }


  getMumbaiFlightStat() {
    this.mumFlightSubscription = this.appComp.mumbaiFlightSubject.subscribe(
      (data) => {
        console.log("subs data", data)
        this.getMumbaiFlightUpdates(data);
      },
      (err) => console.log(err),
      () => console.log('Completed')
    );
  }

  getMumbaiFlightUpdates(data) {
    this.mumFlightStatus = [];
    data.forEach(element => {
      this.mumFlightStatus.push(element)
    });
  }

  ngOnDestroy() {
    console.log("unsubscribe")
    this.mumFlightSubscription.unsubscribe();
  }
}
