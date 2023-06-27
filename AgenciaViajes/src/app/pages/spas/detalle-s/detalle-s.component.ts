import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajesI } from 'src/app/models/interfaces';
import { SpasService } from 'src/app/services/spas.service';

@Component({
  selector: 'app-detalle-s',
  templateUrl: './detalle-s.component.html',
  styleUrls: ['./detalle-s.component.scss']
})
export class DetalleSComponent {
  spa!: ViajesI;
  id!: string;
  token:any;

  constructor(
    private service: SpasService,
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
    this.service.getSpaById(this.id).subscribe((data:any) => {
      console.log(data);
      this.spa = data;
    })
    console.log(this.spa);
  }

  deleteSpa(){
    this.service.deleteSpa(this.id).subscribe((data) => {
      alert('Elemento eliminado')
      this.router.navigate(['/spas'])
    })
  }
  putSpa(){
    this.service.setSpa(this.spa, this.id)
    this.router.navigate(['editSpa'])
  }
}
