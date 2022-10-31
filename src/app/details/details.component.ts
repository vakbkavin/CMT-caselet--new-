import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailsService } from '../shared/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public size: any;

  public show:boolean = false;

  public color: any;

  public id:any;

  public id1:any ;

  public detailList:any;
  
  constructor(private detailapi:DetailsService) { }

  ngOnInit(): void {
    this.getColor(0);
    this.tabChange('emi-tab');
    this.tab1Change('overview');

    this.detailapi.getDetails().subscribe((details:any)=>{
    this.detailList = details; 
    console.log(this.detailList);
})

  }

  getColor(value:any){
    this.color = value;
  }

tabChange(ids:any){
  this.id = ids;
}
tab1Change(ids:any){
  this.id1 = ids;
}

}