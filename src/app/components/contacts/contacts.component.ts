import { Component } from '@angular/core';
import { AosDirective } from '../../directives/aos.directive';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [AosDirective],
  template: `
    <section id="contact" class="py-24 border-t border-line">
      <div class="container mx-auto px-6 max-w-3xl text-center">
        <h2 class="font-display text-3xl font-bold mb-4" appAos="fade-up">Контакты</h2>
        <p class="text-dim mb-10" appAos="fade-up" aosDelay="100">
          Открыт к предложениям и сотрудничеству. Свяжитесь со мной любым удобным способом.
        </p>

        <div class="flex flex-wrap justify-center gap-4" appAos="fade-up" aosDelay="150">
          <a href="mailto:mikh15001@gmail.com" class="flex items-center gap-2 btn-ghost rounded-full">
            <i class="fas fa-envelope accent-text"></i>
            <span>mikh15001&#64;gmail.com</span>
          </a>
          <a href="https://t.me/topshik16" target="_blank" class="flex items-center gap-2 btn-ghost rounded-full">
            <i class="fab fa-telegram accent-text"></i>
            <span>&#64;topshik16</span>
          </a>
          <a href="https://github.com/topqwi9416" target="_blank" class="flex items-center gap-2 btn-ghost rounded-full">
            <i class="fab fa-github accent-text"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export class ContactsComponent {}