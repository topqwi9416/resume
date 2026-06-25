import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AosDirective } from '../../directives/aos.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, AosDirective],
  template: `
    <section id="education" class="py-24 border-t border-line">
      <div class="container mx-auto px-6 max-w-3xl">
        <div class="section-rail">
          <span class="rail-tag">04</span>
          <h2 class="font-display text-3xl font-bold mb-12" appAos="fade-up">Образование</h2>

          <div class="card rounded-xl p-8" appAos="fade-up" aosDelay="100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-accent/10 border border-accent/25 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-graduation-cap accent-text"></i>
              </div>
              <div>
                <h3 class="font-display text-xl font-semibold mb-1">
                  Люберецкий техникум имени Героя Советского Союза лётчика-космонавта Ю.А. Гагарина
                </h3>
                <p class="text-paper/70 mb-2">09.02.07 «Информационные системы и программирование»</p>
                <p class="font-mono text-sm text-dim">2024 — 2027</p>
              </div>
            </div>
            <div class="flex items-center gap-4 mt-5 pt-5 border-t border-line">
              <span class="text-xs text-dim font-mono">учебное заведение:</span>
              <a href="https://luberteh.ru" target="_blank" aria-label="Сайт техникума"
                 class="text-dim hover:text-accent transition">
                <i class="fas fa-globe"></i>
              </a>
              <a href="https://vk.com/luberteh" target="_blank" aria-label="ВКонтакте техникума"
                 class="text-dim hover:text-accent transition">
                <i class="fab fa-vk"></i>
              </a>
              <a href="https://t.me/luberteh" target="_blank" aria-label="Telegram техникума"
                 class="text-dim hover:text-accent transition">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class EducationComponent {}