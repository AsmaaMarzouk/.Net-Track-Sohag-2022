import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userFormGroup: FormGroup;
  // formBuilder
  constructor(private formbuilder:FormBuilder) {
    // this.userFormGroup=new FormGroup({
    //   fullName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   email:new FormControl(''),
    //   mobileNo:new FormControl(''),
    //   password:new FormControl(''),
    //   repassword:new FormControl(''),
    //   address:new FormGroup({
    //     city:new FormControl(''),
    //     street:new FormControl(''),

    //   })

    // });

    // FormBuilder
    this.userFormGroup=this.formbuilder.group({
      fullName:['', [Validators.required,Validators.minLength(3)]],
      email:[''],
      mobileNo:formbuilder.array([formbuilder.control('')]),
      address:this.formbuilder.group({
        city:[''],
        street:['']
      }),
      password:[''],
      repassword:['']
    })
   }

  //  covert fullName to property
  get fullName(){
    return this.userFormGroup.get('fullName');
  }
  get mobileNo(){
    return this.userFormGroup.get('mobileNo') as FormArray;
  }


  addMobileNo(){
    this.mobileNo.push(this.formbuilder.control(''));
  }
  ngOnInit(): void {
  }

}
