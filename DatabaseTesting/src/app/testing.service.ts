import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITutor } from './tutor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  private _url : string = "/http://localhost:3000/api"; //server db data
  private _url2 : string = "assets/data/tutor.json"; //local data
  constructor(private _http: HttpClient) { }

  getTutorData() : Observable<ITutor[]>{
    return this._http.get<ITutor[]>(this._url);
  }

}
