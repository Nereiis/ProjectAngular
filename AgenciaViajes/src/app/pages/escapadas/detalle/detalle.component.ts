import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajesI } from 'src/app/models/interfaces';
import { EscapadasService } from 'src/app/services/escapadas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
  escapada!: ViajesI;
  id!: string;
  token:any;
  constructor(
    private service: EscapadasService,
    private activatedRoute: ActivatedRoute,
    private AuthService:AuthService,
    private router: Router) {
      this.token=this.AuthService.getToken();
    }

  ngOnInit() : void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = String(params.get('id'));
    })
    this.service.getEscapadaById(this.id).subscribe((data:any) => {
      this.escapada = data;
    })
  }

  deleteEscapada(){
    this.service.deleteEscapada(this.id).subscribe((data) => {
      alert('Elemento eliminado')
      this.router.navigate(['/escapadas'])
    })
  }
  putEscapada(){
    this.service.setEscapada(this.escapada, this.id)
    this.router.navigate(['editEscapada'])
  }
}
