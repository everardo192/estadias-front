import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-empresa-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './empresa-form.component.html',
  styleUrl: './empresa-form.component.css'
})
export default class EmpresaFormComponent {
  empresaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private empresaService:EmpresaService) { }

  ngOnInit(): void {
    this.empresaForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Industria: ['', Validators.required],
      Ubicacion: ['', Validators.required],
      Telefono: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.empresaForm.valid) {
      // Aquí puedes enviar los datos del formulario
      console.log(this.empresaForm.value);
      const data = await this.empresaService.reistrarEmpresa(this.empresaForm.value);
      console.log(data);

    } else {
      // Aquí puedes manejar la validación del formulario
      console.log("El formulario no es válido");
    }
  }
}
