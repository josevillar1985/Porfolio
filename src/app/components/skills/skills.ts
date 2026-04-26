import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {

      const { register } = await import('swiper/element/bundle');
      const Swiper = (await import('swiper')).default;

      register();

      setTimeout(() => {
        new Swiper('.tech-slider', {
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 50,
          speed: 2000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          allowTouchMove: false,
        });
      }, 100);

    }
  }
}