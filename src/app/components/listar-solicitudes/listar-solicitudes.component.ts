import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'app-listar-solicitudes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './listar-solicitudes.component.html',
  styleUrl: './listar-solicitudes.component.css'
})
export default class ListarSolicitudesComponent {
 
  nombreEmpresaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private solicitudesServices:SolicitudService) { }

  ngOnInit(): void {
    this.nombreEmpresaForm = this.formBuilder.group({
      nombreEmpresa: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.nombreEmpresaForm.valid) {
      // Aquí puedes enviar los datos del formulario
      console.log(this.nombreEmpresaForm.value);
      const data = await this.solicitudesServices.listarSolicitudesEmpresa(this.nombreEmpresaForm.value);
      console.log(data);
    } else {
      // Aquí puedes manejar la validación del formulario
      console.log("El formulario no es válido");
    }
  }
}
