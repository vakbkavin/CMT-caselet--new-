import { Component, OnInit } from '@angular/core';
import { NewLaunchService } from '../shared/new-launch.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  compareList:any;

  constructor(private newLaunchapi:NewLaunchService) { }

  ngOnInit(): void {
    this.newLaunchapi.compareListArray$.subscribe(data=>{
      this.compareList = data;
      
    })
  }

}
