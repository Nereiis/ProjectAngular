import { Component } from '@angular/core';
import { ViajesI } from 'src/app/models/interfaces';
import { CrucerosService } from 'src/app/services/cruceros.service';

@Component({
  selector: 'app-cruceros',
  templateUrl: './cruceros.component.html',
  styleUrls: ['./cruceros.component.scss']
})
export class CrucerosComponent {
  crucerosList: ViajesI[] = [];

  constructor(private service: CrucerosService) {}

  ngOnInit(): void {
    this.service.getCruceros().subscribe((data: any) => {
      console.log(data);
      this.crucerosList = [...data];
    })
  }
}
