import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { ViajesI } from 'src/app/models/interfaces';
import { IslasService } from 'src/app/services/islas.service';

@Component({
  selector: 'app-islas',
  templateUrl: './islas.component.html',
  styleUrls: ['./islas.component.scss']
})
export class IslasComponent {
  islasList: ViajesI[] = [];
  token:any;

  constructor(private service: IslasService, private AuthService:AuthService) {

    this.token=this.AuthService.getToken()
    console.log(this.token)
  }

  ngOnInit(): void {
    this.service.getIslas().subscribe((data: any) => {
      console.log(data);
      this.islasList = [...data];
    })
  }
}
