import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewLaunchService {

  constructor(private http:HttpClient) { }

  getNewLaunch(){
    return this.http.get('http://localhost:8000/api/newLaunch')
  }
}
