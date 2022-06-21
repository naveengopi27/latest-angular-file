import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BookingData } from '../model/bookingModel';
import { RegisterModel } from '../model/registerModel';
@Component({
  selector: 'app-newbooking',
  templateUrl: './newbooking.component.html',
  styleUrls: ['./newbooking.component.css']
})
export class NewbookingComponent implements OnInit {

  
  
  bookingdetail: BookingData = new BookingData();
  bookingModellist:Array<BookingData>=new Array<BookingData>();
  IsError:boolean=false;  
  errorRes:string='';
  
  
  constructor( private _service: BookingService, private http: HttpClient,private _router:Router) {
  }
  
  ngOnInit(): void {

   
  }
  
  getAllBooking()
  {
    this._service.getAllBooking().subscribe(res => {
      this.bookingModellist=res   
     },
       err => {this.IsError=true;
         this.errorRes="No Booking exists";
         console.log(err)});   
  }

  Success()
  {
    alert("Add Successfully");
    this._router.navigate(["\newbooking"]);
  }
  Error(res:any)
  {
    alert("Failed to add Booking");
  }
  //user: any;
  submit() {
    debugger;
    
    if(this.bookingdetail.name==""||this.bookingdetail.emailId==""||this.bookingdetail.meal==""
    ||this.bookingdetail.flightNumber==""||this.bookingdetail.pnr==""
    ||this.bookingdetail.peopleid==0||this.bookingdetail.id==0)
    {
      alert("Please enter details");
      return;
    }
    
    return this._service.booking(this.bookingdetail).subscribe(res=>this.Success(),err=>this.Error(err))
    
  }
  
  }



