import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlineData } from '../model/airline.model';
import { AddairlineService } from '../services/addairline.service';


@Component({ 
  templateUrl: './add-airlines.component.html',
  styleUrls: ['./add-airlines.component.css']
})
export class AddAirlinesComponent  {
  
  airlineData:AirlineData=new AirlineData();
  airlineModellist:Array<AirlineData>=new Array<AirlineData>();
  IsError:boolean=false;  
  errorRes:string='';
  constructor(private _router:Router,private _auth:AddairlineService) { }

  getallairlines()
  {

    this._auth.getallairlines().subscribe(res => {
      this.airlineModellist=res   
     },
       err => {this.IsError=true;
         this.errorRes="No Airline exists";
         console.log(err)});  
    
  }

 

}
