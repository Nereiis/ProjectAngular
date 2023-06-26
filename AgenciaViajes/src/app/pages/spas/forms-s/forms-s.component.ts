import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViajesI } from 'src/app/models/interfaces';
import { SpasService } from 'src/app/services/spas.service';

@Component({
  selector: 'app-forms-c',
  templateUrl: './forms-s.component.html',
  styleUrls: ['./forms-s.component.scss']
})
export class FormsSComponent implements OnInit{

  spaForm! : FormGroup
  _id!: string
  spa!: ViajesI
  submitted: boolean = false

  constructor(private service: SpasService, private form: FormBuilder, private router: Router){
    this.spa = this.service.getOneSpa()
    this._id = String(this.service.getId())
  }
  ngOnInit(): void {
console.log(this._id, this.spa)
    this.spaForm = this.form.group({
      Nombre:[this.spa?.Nombre, [Validators.required]],
      Ubicacion:[this.spa?.Ubicacion, [Validators.required]],
      Precio:[this.spa?.Precio, [Validators.required]],
      Descripcion:[this.spa?.Descripcion, [Validators.required]],
      Caratula:[this.spa?.Caratula],
      Imagen:[this.spa?.Imagen, [Validators.required]],
      Actividades: this.form.group({
        Itinerario: this.form.group({
          Dia1:[this.spa?.Actividades.Itinerario.Dia1],
          Dia2:[this.spa?.Actividades.Itinerario.Dia2]
        })
      })
    })

    this.spaForm.valueChanges.subscribe((data) => {
      this.spa = data
    })
  }
  editSpa(){
    console.log(this._id)
    this.submitted = true
    if(this.spaForm.valid){
     
      if (this._id!== ""){
        this.service.editSpa(this.spa, this._id).subscribe((data) => {
          this.spaForm.reset()
          this.submitted = false
          this.router.navigate(["/spas"]) })
      }
      else {
        console.log("entroi queir")
        this.service.postSpa(this.spa).subscribe((data) => {
          this.spaForm.reset()
          this.submitted = false
          this.router.navigate(["/spas"])
        })
      }
    }
  }
}
