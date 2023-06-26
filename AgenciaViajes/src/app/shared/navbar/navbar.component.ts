import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'Viajar es Fácil'

  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop, 'scrolllength#');
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background': 'linear-gradient(to bottom right, #ffffff)'
        
      }
    } else {
      this.navbg
    }
  }
}
