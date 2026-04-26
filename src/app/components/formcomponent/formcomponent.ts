import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-formcomponent',
  imports: [],
  templateUrl: './formcomponent.html',
  styleUrl: './formcomponent.css',
})
export class Formcomponent {
  
  public sendEmail(e: Event) {
    e.preventDefault();
    Swal.fire({
      title: 'Enviando mensaje...',
      text: 'Por favor, espera un momento',
      allowOutsideClick: false,
      showConfirmButton: false,
      background: '#121212',
      color: '#ffffff',
      didOpen: () => {
        Swal.showLoading();
        const loader = document.querySelector('.swal2-loader') as HTMLElement;
        if (loader) loader.style.borderLeftColor = '#ff3b3b';
      }
    });

    emailjs.sendForm(
      'service_2kt5st4',      
      'template_ih0warx',  
      e.target as HTMLFormElement,
      'wAPDc7uzGVvdwUMKF'     
    )
    .then((result) => {
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'He recibido tu correo. Te responderé muy pronto, José Ángel Villar.',
        background: '#121212',
        color: '#ffffff',
        confirmButtonColor: '#ff3b3b', 
        iconColor: '#ff3b3b',         
        timer: 15000,                  
        timerProgressBar: true,
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut'
        }
      });
      
      (e.target as HTMLFormElement).reset(); 
    }, (error) => {
      
      Swal.fire({
        icon: 'error',
        title: 'Vaya...',
        text: 'Algo ha fallado. Por favor, inténtalo de nuevo.',
        background: '#121212',
        color: '#ffffff',
        confirmButtonColor: '#444444'
      });
      console.error('Error de EmailJS:', error.text);
    });
  }
}