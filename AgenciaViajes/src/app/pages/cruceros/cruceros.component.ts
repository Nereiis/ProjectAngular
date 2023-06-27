import { Component } from '@angular/core';
import { ViajesI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { CrucerosService } from 'src/app/services/cruceros.service';

@Component({
  selector: 'app-cruceros',
  templateUrl: './cruceros.component.html',
  styleUrls: ['./cruceros.component.scss']
})
export class CrucerosComponent {
  crucerosList: ViajesI[] = [];
  token:any;
  constructor(private service: CrucerosService,private AuthService:AuthService) {this.token=this.AuthService.getToken()
    console.log(this.token)}

  ngOnInit(): void {
    this.service.getCruceros().subscribe((data: any) => {
      console.log(data);
      this.crucerosList = [...data];
    })
  }
  
}
