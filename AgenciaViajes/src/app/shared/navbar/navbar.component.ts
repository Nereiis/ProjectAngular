import { AuthService } from './../../services/auth.service';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  token:any;
constructor(private router:Router, private AuthService:AuthService){
  this.token=this.AuthService.getToken();
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
}
  logOut(){
    // localStorage.clear(); //COn este borrariamos todo en localstorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    location.reload();
    this.router.navigate(["/"]);
    

  }
}
