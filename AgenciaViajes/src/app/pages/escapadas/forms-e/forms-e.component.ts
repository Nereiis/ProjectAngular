import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViajesI } from 'src/app/models/interfaces';
import { EscapadasService } from 'src/app/services/escapadas.service';

@Component({
  selector: 'app-forms-c',
  templateUrl: './forms-e.component.html',
  styleUrls: ['./forms-e.component.scss']
})
export class FormsEComponent implements OnInit{

  escapadaForm! : FormGroup
  _id!: string
  escapada!: ViajesI
  submitted: boolean = false

  constructor(private service: EscapadasService, private form: FormBuilder, private router: Router){
    this.escapada = this.service.getOneEscapada()
    this._id = String(this.service.getId())
  }
  ngOnInit(): void {
console.log(this._id, this.escapada)
    this.escapadaForm = this.form.group({
      Nombre:[this.escapada?.Nombre, [Validators.required]],
      Ubicacion:[this.escapada?.Ubicacion, [Validators.required]],
      Precio:[this.escapada?.Precio, [Validators.required]],
      Descripcion:[this.escapada?.Descripcion, [Validators.required]],
      Caratula:[this.escapada?.Caratula],
      Imagen:[this.escapada?.Imagen, [Validators.required]],
      Actividades: this.form.group({
        Itinerario: this.form.group({
          Dia1:[this.escapada?.Actividades.Itinerario.Dia1],
          Dia2:[this.escapada?.Actividades.Itinerario.Dia2]
        })
      })
    })

    this.escapadaForm.valueChanges.subscribe((data) => {
      this.escapada = data
    })
  }
  editEscapada(){
    console.log(this._id)
    this.submitted = true
    if(this.escapadaForm.valid){
      console.log("entro aqui8")
      if (this._id!== ""){
        this.service.editEscapada(this.escapada, this._id).subscribe((data) => {
          this.escapadaForm.reset()
          this.submitted = false
          this.router.navigate(["/escapadas"]) })
      }
      else {
        console.log(this.escapada)
        this.service.postEscapada(this.escapada).subscribe((data) => {
          this.escapadaForm.reset()
          this.submitted = false
          this.router.navigate(["/escapadas"])
        })
      }
    }
  }
}
