import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViajesI } from 'src/app/models/interfaces';
import { IslasService } from 'src/app/services/islas.service';

@Component({
  selector: 'app-forms-c',
  templateUrl: './forms-i.component.html',
  styleUrls: ['./forms-i.component.scss']
})
export class FormsIComponent implements OnInit{

  islaForm! : FormGroup
  _id!: string
  isla!: ViajesI
  submitted: boolean = false

  constructor(private service: IslasService, private form: FormBuilder, private router: Router){
    this.isla = this.service.getOneIsla()
    this._id = String(this.service.getId())
  }
  ngOnInit(): void {
console.log(this._id, this.isla)
    this.islaForm = this.form.group({
      Nombre:[this.isla?.Nombre, [Validators.required]],
      Ubicacion:[this.isla?.Ubicacion, [Validators.required]],
      Precio:[this.isla?.Precio, [Validators.required]],
      Descripcion:[this.isla?.Descripcion, [Validators.required]],
      Caratula:[this.isla?.Caratula],
      Imagen:[this.isla?.Imagen, [Validators.required]],
      Actividades: this.form.group({
        Itinerario: this.form.group({
          Dia1:[this.isla?.Actividades.Itinerario.Dia1],
          Dia2:[this.isla?.Actividades.Itinerario.Dia2]
        })
      })
    })

    this.islaForm.valueChanges.subscribe((data) => {
      this.isla = data
    })
  }
  editIsla(){
    console.log(this._id)
    this.submitted = true
    if(this.islaForm.valid){
      if (this._id!== ""){
        this.service.editIsla(this.isla, this._id).subscribe((data) => {
          this.islaForm.reset()
          this.submitted = false
          this.router.navigate(["/islas"]) })
      }
      else {
        this.service.postIsla(this.isla).subscribe((data) => {
          this.islaForm.reset()
          this.submitted = false
          this.router.navigate(["/islas"])
        })
      }
    }
  }
}
