import { Component } from '@angular/core';
import { ViajesI } from 'src/app/models/interfaces';
import { EscapadasService } from 'src/app/services/escapadas.service';

@Component({
  selector: 'app-escapadas',
  templateUrl: './escapadas.component.html',
  styleUrls: ['./escapadas.component.scss']
})
export class EscapadasComponent {
  escapadasList: ViajesI[] = [];

  constructor(private service: EscapadasService) {}

  ngOnInit(): void {
    this.service.getEscapadas().subscribe((data: any) => {
      this.escapadasList = [...data];
    })
  }
}
