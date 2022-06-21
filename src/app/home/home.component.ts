import { Component, OnInit } from '@angular/core';
import { InventoryData } from '../model/inventorymodel';
import { Router } from '@angular/router';
import { InventoryservicesService } from '../services/inventoryservices/inventoryservices.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inventoryData: InventoryData = new InventoryData();
  inventoryModellist: Array<InventoryData> = new Array<InventoryData>();
  errorRes:string='';
  IsError:boolean=false;
  IsSearch:boolean=false;
  
  
  constructor(private _service: InventoryservicesService,private _router:Router) {
    
    
   }
  
  ngOnInit(): void {
    
  }
  IsAlert:Boolean=false;
  alerts:string='';
  SearchInventoyr() {
    if(this.inventoryData.fromPlace===""|| this.inventoryData.toPlace===""||this.inventoryData.startDateTime==""||this.inventoryData.endDateTime==='')
    {
      this.alerts="Please fill the fields";      
      this.IsAlert=true;
      alert("Please fill the details");
      return;
    }
    this.IsError=false;
    this._service.getFlightByPlaces(this.inventoryData.fromPlace,this.inventoryData.toPlace).subscribe(res=>{
      this.IsSearch=true;
      this.Success(res)},err=>{        
      this.IsSearch=true;
      this.Error(err);
      })
  }

  GetAllInventory(){
    this._service.getAllInventory().subscribe(res=>this.Success(res),err=>this.Error(err));   
  }
  Error(err:any)
  {
    this.IsError=true;
    this.errorRes="Failed to find flights";
    
  }
  Success(res:any)
  {
    this.inventoryModellist=res;
  }
}
