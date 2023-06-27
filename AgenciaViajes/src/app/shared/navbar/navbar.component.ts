import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private router:Router){}
  logOut(){
    // localStorage.clear(); //COn este borrariamos todo en localstorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(["/"]);

  }
}
