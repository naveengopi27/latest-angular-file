import { FormBuilder, FormControl, Validators } from "@angular/forms";

export class UserData{
    UserName:string='';
    Password:string='';
    
    formloginGroup: any;
    constructor() {
        var _builder=new FormBuilder();
        this.formloginGroup=_builder.group({});        
        var validationcollection=[];        
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.required);
       this.formloginGroup.addControl("passwordControl",new FormControl('',Validators.required));
       this.formloginGroup.addControl('userNameControl',new FormControl('',Validators.required));
      //  this.formloginGroup.addControl('userNameControl',new FormControl('',Validators.required));
      //  this.formloginGroup.addControl('GenderControl',new FormControl('',Validators.required));
      //  this.formloginGroup.addControl('contactnumberControl',new FormControl('',Validators.required));
    }
}