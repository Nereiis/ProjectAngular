import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajesI } from 'src/app/models/interfaces';
import { IslasService } from 'src/app/services/islas.service';

@Component({
  selector: 'app-detalle-i',
  templateUrl: './detalle-i.component.html',
  styleUrls: ['./detalle-i.component.scss']
})
export class DetalleIComponent {
  isla!: ViajesI;
  id!: string;

  constructor(
    private service: IslasService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() : void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = String(params.get('id'));
    })
    console.log(this.id);
    this.service.getIslaById(this.id).subscribe((data:any) => {
      this.isla = data;
    })
  }
}
