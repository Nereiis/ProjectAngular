import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { ViajesI } from 'src/app/models/interfaces';
import { SpasService } from 'src/app/services/spas.service';

@Component({
  selector: 'app-spas',
  templateUrl: './spas.component.html',
  styleUrls: ['./spas.component.scss']
})
export class SpasComponent {
  spasList: ViajesI[] = [];
  token:any;

  constructor(private service: SpasService, private AuthService:AuthService) {
    this.token=this.AuthService.getToken()
    console.log(this.token)
  }

  ngOnInit(): void {
    this.service.getSpas().subscribe((data: any) => {
      console.log(data);
      this.spasList = [...data];
    })
  }
}
