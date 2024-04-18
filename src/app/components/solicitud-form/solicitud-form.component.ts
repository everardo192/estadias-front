import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'app-solicitud-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './solicitud-form.component.html',
  styleUrl: './solicitud-form.component.css'
})
export default class SolicitudFormComponent implements OnInit{

  solicitudForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private solicitudService:SolicitudService) { }

  ngOnInit(): void {
    this.solicitudForm = this.formBuilder.group({
      NomEmpresa: ['', Validators.required],
      Perfil: ['', Validators.required],
      Cantidad: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.solicitudForm.valid) {
      // Aquí puedes enviar los datos del formulario
      console.log(this.solicitudForm.value);
      this.solicitudService.crearSolicitud(this.solicitudForm.value);
    } else {
      // Aquí puedes manejar la validación del formulario
      console.log("El formulario no es válido");
    }
  }

}
