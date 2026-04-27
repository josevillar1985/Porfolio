import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-herocomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herocomponent.html',
  styleUrl: './herocomponent.css'
})
export class Herocomponent {

  verEmail() {
    Swal.fire({
      title: '¡HABLEMOS!',
      html: `
        <p style="color: #ccc; margin-bottom: 10px;">Puedes escribirme directamente a:</p>
        <h3 style="color: #ff3b3b; font-size: 1.5rem; font-weight: bold;">josevillar.dev@gmail.com</h3>
      `,
      background: '#0a0a0a', // Fondo oscuro
      color: '#fff',         // Texto general blanco
      showConfirmButton: true,
      confirmButtonText: 'ENTENDIDO',
      confirmButtonColor: '#000000', // Forzamos el fondo del botón a negro
      customClass: {
        popup: 'border-glow',
        confirmButton: 'btn-swal-negro' // Clase personalizada para el botón
      }
    });
  }
}