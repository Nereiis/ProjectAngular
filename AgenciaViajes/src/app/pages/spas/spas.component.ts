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

  constructor(private service: SpasService) {}

  ngOnInit(): void {
    this.service.getSpas().subscribe((data: any) => {
      console.log(data);
      this.spasList = [...data];
    })
  }
}
