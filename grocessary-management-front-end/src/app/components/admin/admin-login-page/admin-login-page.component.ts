import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { GrocessaryService } from '../../service/grocessary.service';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    private router:Router,
    private gservice:GrocessaryService
  ) { }

  ngOnInit(): void {
  }
  signIn(): void {
    // Email pattern for validation
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!pattern.test(this.email)) {
      alert("Email is not valid.");
      return;
    }
    if (this.password === '') {
      alert("Password should not be blank");
      return;
    }
    //alert("sucess")

      // Create a request body with the email and password
    const body = {
      "adminEmailId": this.email,
      "adminPassword": this.password
    }

      // Send a request to the admin sign-in endpoint
    this.gservice.adminSignIn(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.adminId){
        let userName = '';
        if (res?.firstName) {
          userName+=res?.firstName;
        }
        if (res?.lastName){
          userName+=' ' + res?.lastName;
        }
        this.gservice.storeAdminUserName(userName);
        this.gservice.storeAdminAuthorization(res?.adminId);
        this.router.navigate(['/admin/home']);

      }
    }, err =>{
      console.log("Error  ",err);
      alert("Something going wrong in login!!pl try again");
    })
  }


}
