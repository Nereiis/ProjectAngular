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

  constructor(private service: IslasService) {}

  ngOnInit(): void {
    this.service.getIslas().subscribe((data: any) => {
      console.log(data);
      this.islasList = [...data];
    })
  }
}
