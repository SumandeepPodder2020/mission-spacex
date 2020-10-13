import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpacexMissionService {
  baseUrl = 'https://api.spaceXdata.com/v3/launches?';
  constructor(private http: HttpClient) { }

  getMissionsOnLoad(launch, land, year,limit=1): Observable<any> {
    let apiUrl = this.baseUrl+'limit='+limit;
    if(launch) {
      apiUrl = apiUrl+'&launch_success='+launch;
    }
    if(land) {
      apiUrl = apiUrl+'&land_success='+land;
    }
    if(year) {
      apiUrl = apiUrl+'&launch_year='+year;
    }    
    return this.http.get(apiUrl);
   
  }
}
