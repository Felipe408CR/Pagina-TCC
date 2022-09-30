import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;

  constructor(public fabricaDiccionario:FormBuilder) { }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()

  }

  public analizarFormulario(): void {
    console.log(this.formulario.value)
  }

  public inicializarFormulario(): FormGroup{
    return this.fabricaDiccionario.group({
      iup:['pipe',[Validators.required,Validators.minLength(6)]],
      tiporemitente:['empresa',[Validators.required]],
      idremitente:['4518792815',Validators.required],
      nombreremitente:['Andercol',Validators.required],
      deptoremitente:['Antioquia',Validators.required],
      municipioremitente:['Medellin',Validators.required],
      direcremitente:['cll 54 #54-78',Validators.required],
      tipodestinatario:['Persona Natural',Validators.required],
      iddestinatario:['4572934647',Validators.required],
      nombredestinatario:['Juana',Validators.required],
      deptodestinatario:['Antioquia',Validators.required],
      municipiodestinatario:['Envigado',Validators.required],
      direcdestinatario:['cra 50 #45-80',Validators.required],
    })
  }

}
