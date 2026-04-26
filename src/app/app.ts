import { Component, signal, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Para que no de error en el servidor
import * as AOS from 'aos';

import { Headercomponent } from './components/headercomponent/headercomponent';
import { Herocomponent } from './components/herocomponent/herocomponent';
import { Proyectcomponent } from './components/proyectcomponent/proyectcomponent';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Formcomponent } from './components/formcomponent/formcomponent';
import { Footercomponent } from './components/footercomponent/footercomponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Headercomponent, Herocomponent, Proyectcomponent, About, Skills, Formcomponent, Footercomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('portafolio');
  
 
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 120
      });
    }
  }
}