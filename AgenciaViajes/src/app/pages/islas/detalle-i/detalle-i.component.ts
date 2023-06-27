import { AuthService } from './../../../services/auth.service';
import { IslasComponent } from './../islas.component';
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
  token:any;

  constructor(
    private service: IslasService,
    private activatedRoute: ActivatedRoute,
    private AuthService:AuthService,
    private router: Router) {
      this.token=this.AuthService.getToken()
    console.log(this.token)
    }

  ngOnInit() : void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = String(params.get('id'));
    })
    console.log(this.id);
    this.service.getIslaById(this.id).subscribe((data:any) => {
      this.isla = data;
    })
  }

  deleteIsla(){
    this.service.deleteIsla(this.id).subscribe((data) => {
      alert('Elemento eliminado')
      this.router.navigate(['/islas'])
    })
  }
  putIsla(){
    this.service.setIsla(this.isla, this.id)
    this.router.navigate(['editIsla'])
  }
}
