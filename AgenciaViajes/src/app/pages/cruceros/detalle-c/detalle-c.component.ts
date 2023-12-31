import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajesI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { CrucerosService } from 'src/app/services/cruceros.service';

@Component({
  selector: 'app-detalle-c',
  templateUrl: './detalle-c.component.html',
  styleUrls: ['./detalle-c.component.scss']
})
export class DetalleCComponent {
  crucero!: ViajesI;
  id!: string;
  token:any;

  constructor(
    private service: CrucerosService,
    private activatedRoute: ActivatedRoute,
    private AuthService:AuthService,
    private router: Router) {
      this.token=this.AuthService.getToken();
    }

  ngOnInit() : void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = String(params.get('id'));
    })
    console.log(this.id);
    this.service.getCruceroById(this.id).subscribe((data:any) => {
      this.crucero = data;
    })

    
  }

  deleteCrucero(){
    this.service.deleteCrucero(this.id).subscribe((data) => {
      alert('Elemento eliminado')
      this.router.navigate(['/cruceros'])
    })
  }

  putCrucero(){
    this.service.setCrucero(this.crucero, this.id)
    this.router.navigate(['editCrucero'])
  }
}
