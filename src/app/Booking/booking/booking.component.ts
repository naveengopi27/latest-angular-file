import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingData } from 'src/app/model/bookingModel';
import { RegisterModel } from 'src/app/model/registerModel';
import { PersonData } from 'src/app/model/personModel';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingdetail: BookingData = new BookingData();
  persondataItem: PersonData = new PersonData();
  inventoryData: any
  personlist: Array<PersonData> = new Array<PersonData>();
  constructor( private _service: BookingService, private http: HttpClient,private _router:Router) {
    this.AddRow();
    this._service.getloginUserDetail(localStorage.getItem('user')).subscribe(Res => { this.data = Res }, err => console.log(err));
  }
  personArray: Array<PersonData> = new Array<PersonData>();
  ngOnInit(): void {

    // this._data.book.subscribe(res => { this.inventoryData = res });
  }
  AddRow() {

    this.persondataItem = new PersonData();
    this.personArray.push(this.persondataItem);
  }
  DeletRow(index: any) {
    this.personArray = this.personArray.slice(index);
    return this.personArray;

  }
  data: RegisterModel = new RegisterModel();
  userbook: any = {};
  userbookarr: any = [];
  
  submit() {
    debugger;
    
    this.userbook={name:this.bookingdetail.name,emailId:this.bookingdetail.emailId,
      meal:this.bookingdetail.meal,flightNumber:this.bookingdetail.flightNumber,
      users:this.personArray }
    
    var result:any;
    this.http.post("http://localhost:61116/api/Booking/add", this.userbook).subscribe((res:any) => {
    result=alert("Successfully Booked Ticked\n "+res.message)    
    this._router.navigate(["/home"]);
    }, err => console.log(err));
   
  }

}
