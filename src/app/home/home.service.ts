import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private BASE_URL = environment.BASE_URL;
  private getAllBangaloreDepartureFlight = this.BASE_URL + '&iataCode=BLR&type=departure';
  private getAllDelhiDepartureFlightStatus = this.BASE_URL + '&iataCode=DEL&type=departure';
  private getAllMumbaiDepartureFlightStatus = this.BASE_URL + '&iataCode=BOM&type=departure';
  private getAllKolkataDepartureFlightStatus = this.BASE_URL + '&iataCode=CCU&type=departure';


  constructor(private httpClient: HttpClient) {
    console.log("BASE URL", this.BASE_URL);
  }
  
  getAllBangloreDepFl()  :Observable<any> {
    return this.httpClient.get(this.getAllBangaloreDepartureFlight);
  }
  getAllDelhiDepFl() :Observable<any> {
    return this.httpClient.get(this.getAllDelhiDepartureFlightStatus);
  }
  getAllMumbaiDepFl() :Observable<any> {
    return this.httpClient.get(this.getAllMumbaiDepartureFlightStatus);
  }
  getAllKolkataDepFl() :Observable<any> {
    return this.httpClient.get(this.getAllKolkataDepartureFlightStatus);
  }
  

}



