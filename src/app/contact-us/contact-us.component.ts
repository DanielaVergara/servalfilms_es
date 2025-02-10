import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  isLoading = false;  // Variable para controlar el spinner
  isSubmitted = false;  // Variable para controlar si el formulario ha sido enviado

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;  // Mostrar el spinner cuando el formulario se envía
    this.isSubmitted = false;  // Reiniciar el mensaje de "Enviado"

    // Simular el tiempo de espera para mostrar el spinner
    setTimeout(() => {
      this.isLoading = false;  // Ocultar el spinner después de 3 segundos (ajustar según sea necesario)
      this.isSubmitted = true;  // Mostrar el mensaje de "Enviado"
    }, 3000);

    // Aquí enviamos el formulario real (si fuera necesario, puedes integrar tu servicio de backend)
    const formElement = document.getElementById('contact-form') as HTMLFormElement;
    formElement.submit(); // Enviar el formulario
  }

  hasError(field: string): boolean {
    const control = this.contactForm.get(field);
    return control?.invalid && control?.touched ? true : false;
  }

  ngOnInit(): void { }

}
