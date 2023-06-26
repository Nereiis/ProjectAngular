import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViajesI } from 'src/app/models/interfaces';
import { CrucerosService } from 'src/app/services/cruceros.service';

@Component({
  selector: 'app-forms-c',
  templateUrl: './forms-c.component.html',
  styleUrls: ['./forms-c.component.scss']
})
export class FormsCComponent implements OnInit{

  cruceroForm! : FormGroup
  _id!: string
  crucero!: ViajesI
  submitted: boolean = false

  constructor(private service: CrucerosService, private form: FormBuilder, private router: Router){
    this.crucero = this.service.getOneCrucero()
    this._id = String(this.service.getId())
  }
  ngOnInit(): void {
console.log(this._id, this.crucero)
    this.cruceroForm = this.form.group({
      Nombre:[this.crucero?.Nombre, [Validators.required]],
      Ubicacion:[this.crucero?.Ubicacion, [Validators.required]],
      Precio:[this.crucero?.Precio, [Validators.required]],
      Descripcion:[this.crucero?.Descripcion, [Validators.required]],
      Caratula:[this.crucero?.Caratula],
      Imagen:[this.crucero?.Imagen, [Validators.required]],
      Dia1:[this.crucero?.Actividades.Itinerario.Dia1],
      Dia2:[this.crucero?.Actividades.Itinerario.Dia2]
    })

    this.cruceroForm.valueChanges.subscribe((data) => {
      this.crucero = data
    })
  }
  editCrucero(){
    console.log(this._id)
    this.submitted = true
    if(this.cruceroForm.valid){
      if (this._id!== ""){
        this.service.editCrucero(this.crucero, this._id).subscribe((data) => {
          this.cruceroForm.reset()
          this.submitted = false
          this.router.navigate(["/cruceros"]) })
      }
      else {
        this.service.postCrucero(this.crucero).subscribe((data) => {
          this.cruceroForm.reset()
          this.submitted = false
          this.router.navigate(["/cruceros"])
        })
      }
    }
  }
}
