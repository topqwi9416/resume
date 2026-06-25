import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { AosDirective } from '../../directives/aos.directive';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, AosDirective],
  template: `
  <section id="achievements" class="py-24 border-t border-line">
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="section-rail">
        <span class="rail-tag">06</span>
        <h2 class="font-display text-3xl font-bold mb-4" appAos="fade-up">Достижения</h2>

        <p class="text-dim mb-10" appAos="fade-up" aosDelay="100">
          Сертификаты, грамоты и дипломы. Все документы хранятся на Google Диске.
        </p>

        <h3 class="font-mono text-xs amber-text uppercase tracking-wide mb-6" appAos="fade-up" aosDelay="150">
          // курсы от вендоров
        </h3>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (a of achievements; track a.id; let i = $index) {
            <a [href]="a.certificateUrl" target="_blank"
               class="card rounded-xl overflow-hidden block"
               appAos="fade-up" [aosDelay]="(200 + i * 100).toString()">

              @if (a.imageUrl) {
                <div class="aspect-[4/3] bg-panel border-b border-line overflow-hidden">
                  <img [src]="a.imageUrl"
                       [alt]="a.title"
                       class="w-full h-full object-cover">
                </div>
              }

              <div class="p-5">
                <h3 class="font-semibold mb-1">{{ a.title }}</h3>
                <p class="text-sm text-dim mb-3">{{ a.type }} · {{ a.year }}</p>
                <span class="inline-flex items-center gap-2 text-sm font-medium accent-text">
                  Открыть сертификат <i class="fas fa-arrow-right text-xs"></i>
                </span>
              </div>
            </a>
          }
        </div>

        <div class="text-center mt-10" appAos="fade-up">
          <a href="https://drive.google.com/drive/folders/1gV7ogc_gp-dRhBjOvjTgMOadbfh0leRu"
             target="_blank"
             class="inline-flex items-center gap-2 btn-ghost">
            <i class="fab fa-google-drive"></i>
            <span>Все сертификаты на Google Диске</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  `
})
export class AchievementsComponent {
  data = inject(DataService);
  achievements = this.data.getAchievements();
}