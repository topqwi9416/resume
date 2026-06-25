import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AosDirective } from '../../directives/aos.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AosDirective],
  template: `
    <section class="min-h-screen flex items-center justify-center pt-24 pb-20 relative overflow-hidden">
      <div class="container mx-auto px-6 max-w-4xl relative z-10">
        <p class="font-mono text-xs accent-text mb-5 tracking-wide" appAos="fade-up" aosDelay="100">
          <span class="text-dim">~/</span>люберцы<span class="text-dim">·</span>открыт_к_стажировкам
        </p>
        <h1 class="font-display text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-[0.95]" appAos="fade-up" aosDelay="200">
          Мамонов<br><span class="accent-text">Михаил</span>
        </h1>
        <p class="text-xl md:text-2xl text-paper/90 mb-4 font-light" appAos="fade-up" aosDelay="300">
          Backend-разработчик
          <span class="text-dim font-mono text-base mx-1">//</span>
          <span class="font-mono text-lg">Python · Django · PHP · Laravel</span>
        </p>
        <p class="text-base text-dim mb-10 max-w-xl leading-relaxed" appAos="fade-up" aosDelay="400">
          Студент 3 курса по специальности 09.02.07 «Информационные системы и программирование».
          Делаю проекты с реальными базами данных и слежу за индустрией — от учебных работ до отраслевых конференций.
        </p>
        <div class="flex flex-wrap gap-4" appAos="fade-up" aosDelay="500">
          <a href="https://drive.google.com/file/d/1itWO5pQq9hC3ecyCQZI0M1w-VoqF-yHO/view"
             target="_blank"
             class="btn-primary">
            <i class="fas fa-file-arrow-down mr-2"></i>Скачать резюме (PDF)
          </a>
          <a [href]="'https://github.com/' + data.githubUser" target="_blank"
             class="btn-ghost">
            <i class="fab fa-github mr-2"></i>GitHub
          </a>
          <a [href]="'https://github.com/' + data.githubUser + '/' + data.monoRepo" target="_blank"
             class="btn-ghost">
            <i class="fas fa-folder-open mr-2"></i>Монорепозиторий
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  data = inject(DataService);
}