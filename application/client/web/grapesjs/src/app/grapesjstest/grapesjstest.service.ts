import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class GrapesjstestService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllgrapesjstestValues(data:any){

    return this.http.post(`${this.BaseURL}/grapesjstest`,data);
  }

  GetAllgrapesjstestValues(){
    return this.http.get(`${this.BaseURL}/grapesjstest`);
  }

  Updategrapesjstest(data:any){
    return this.http.put(`${this.BaseURL}/grapesjstest/${data.id}`,data);
  }

  getSpecificgrapesjstest(id:number){
    return this.http.get(`${this.BaseURL}/grapesjstest/${id}`);
  }

  getSpecificgrapesjstestHistory(id:number){
    return this.http.get(`${this.BaseURL}/grapesjstest/${id}/history?days=30`);
  }

  DeletegrapesjstestValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/grapesjstest/${dataId}`);
  }

  GetEntityById(grapesjstestId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/grapesjstestid/` + grapesjstestId);
  }

  Searchgrapesjstest(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/grapesjstest/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}