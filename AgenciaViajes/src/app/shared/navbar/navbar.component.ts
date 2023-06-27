import { AuthService } from './../../services/auth.service';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  token:any;
  
url?:string;
constructor(private router:Router, private AuthService:AuthService){
  this.token=this.AuthService.getToken();
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.events.subscribe((val) => {
    // see also 
    if(val instanceof NavigationEnd) {
      console.log(val.url);
      this.url = val.url;
    }
  });
  
}


  






  logOut(){
    // localStorage.clear(); //COn este borrariamos todo en localstorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    location.reload();
    this.router.navigate(["/"]);
    

  }
}
