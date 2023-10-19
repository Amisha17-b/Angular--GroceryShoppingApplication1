import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GrocessaryService } from './components/service/grocessary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grocessary-management-front-end';
  isLoggedIn: boolean = false;   // Flag to indicate if a regular user is logged in
  isAdminLoggedIn: boolean = false;  // Flag to indicate if an admin is logged in


  constructor(
    private gService:GrocessaryService,
    private router:Router
  ){
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      if (this.gService.getClientAuthorization() !== null) {
  // If a client is logged in, set the appropriate flags
        setTimeout(() => {
          this.isLoggedIn = true;
          this.isAdminLoggedIn = false;
        }, 100);
      } else {
        if (this.gService.getAdminAuthorization() !== null) {
            // If an admin is logged in, set the appropriate flags
          setTimeout(() => {
            this.isAdminLoggedIn = true;
            this.isLoggedIn = false;
          }, 100);

        } {  // If no user is logged in, reset the flags
          setTimeout(() => {
            this.isLoggedIn = false;
            this.isAdminLoggedIn = false;
          }, 1);
        }
      }
    });
//line 20 to 41-->check when routing(url) change it will check authorization
  }



}
