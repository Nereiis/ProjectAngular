import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import 'jquery';
import 'popper.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private AuthService:AuthService){}


  ngOnInit(){
  this.AuthService.isclicked=true;
}

}
