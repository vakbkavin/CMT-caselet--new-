import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewLaunchService {
  compareListArray$:BehaviorSubject<[]> = new BehaviorSubject([]);

  constructor(private http:HttpClient) { }

  getNewLaunch(){
    return this.http.get('http://localhost:8000/api/newLaunch')
  }
}
