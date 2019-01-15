import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { interval, Subject, Subscription,  } from 'rxjs';
import { takeUntil, switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  blrflightStatus  =[];
  delFlightStatus  =[];
  MumFlightStatus  =[];
  kolFlightStatus  =[];
  callDuration;
  private subscription: Subscription;
  constructor( private homeService: HomeService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.getBangaloreflightStatus();
    this.getDelhiflightStatus();
    this.getMumbaiflightStatus();
    this.getKolkataflightStatus();
    this.callDuration = this.elementRef.nativeElement.querySelector('#time');
        this.startTimer(this.callDuration);
    
  }

  startTimer(display) {
    var timer = 60;
    var minutes;
    var seconds;

    interval(1000).subscribe(x => {
        seconds = Math.floor(timer % 60);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =  seconds;

        --timer;
        if(--timer === 0) {
          console.log('timeup: ', timer);
          timer = 60;
        }
    })
}

// get Bangalore flight status 
getBangaloreflightStatus() {
  this.subscription = interval(60000)   // set interval for 60 sec
  .pipe(
    startWith(0),
    switchMap(() => this.homeService.getAllBangloreDepFl())).subscribe(
    res =>{
      this.blrflightStatus =[];
      console.log("blr : : ", res.length-1, res.length-5);
      for(var i =res.length-30;i > res.length-34;i--) {
        this.blrflightStatus.push(res[i]) ;
      }
  },
  err => {
   alert(err.name);
  },
  () => {
    // Do stuff after completion
  })
}

// get Delhi flight status
getDelhiflightStatus() {
  this.subscription = interval(60000)  // set interval for 60 sec
  .pipe(
    startWith(0),
    switchMap(() =>this.homeService.getAllDelhiDepFl())).subscribe(
    res =>{
      this.delFlightStatus =[];
      console.log("blr : : ", res);
      for(var i =res.length-30;i > res.length-34;i--) {
        this.delFlightStatus.push(res[i]) ;
      }
  },
  err => {
    alert(err.name);
  },
  () => {
    // Do stuff after completion
  })
}

// get Mumbai flight status
getMumbaiflightStatus() {
  this.subscription = interval(60000)  // set interval for 60 sec
  .pipe(
    startWith(0),
    switchMap(() =>this.homeService.getAllMumbaiDepFl())).subscribe(
    res =>{
      this.MumFlightStatus =[];
      console.log("blr : : ", res);
      for(var i =res.length-30;i > res.length-34;i--) {
        this.MumFlightStatus.push(res[i]) ;
      }
  },
  err => {
    alert(err.name);
  },
  () => {
    // Do stuff after completion
  })
}

// get Kolkata flight status
getKolkataflightStatus() {
  this.subscription = interval(60000)  // set interval for 60 sec
  .pipe(
    startWith(0),
    switchMap(() => this.homeService.getAllKolkataDepFl()))
  .subscribe(
    res =>{
      this.kolFlightStatus = [];
      console.log("blr : : ", res);
      for(var i =res.length-30;i > res.length-34;i--) {
        this.kolFlightStatus.push(res[i]) ;
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
