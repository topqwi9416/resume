import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AosDirective } from '../../directives/aos.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AosDirective],
  template: `
    <section id="about" class="py-24 border-t border-line">
      <div class="container mx-auto px-6 max-w-3xl">
        <div class="section-rail">
          <span class="rail-tag">01</span>
          <h2 class="font-display text-3xl font-bold mb-8" appAos="fade-up">Обо мне</h2>
          <div class="space-y-4 text-lg text-paper/80 leading-relaxed" appAos="fade-up" aosDelay="100">
            <p>
              Студент Люберецкого техникума имени Героя Советского Союза лётчика-космонавта Ю.А. Гагарина.
              Изучаю разработку информационных систем, backend-разработку на Python и PHP, проектирование баз данных.
              Больше всего нравится доводить проект от макета до рабочей БД — не просто верстать, а понимать,
              как данные движутся внутри системы.
            </p>
            <p>
              Помимо учёбы участвую в отраслевых событиях — был на экскурсии в 1С,
              посещал тематические конференции и IT-мероприятия. Веду рабочие процессы и задачи в
              <a [href]="data.yougileUrl" target="_blank" class="accent-text underline hover:text-paper transition">YouGile</a>.
            </p>
            <p>
              Все учебные и проектные работы, включая исходный код, дампы БД и документацию,
              собраны в едином
              <a [href]="'https://github.com/' + data.githubUser + '/' + data.monoRepo"
                 target="_blank" class="accent-text underline hover:text-paper transition">монорепозитории</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  data = inject(DataService);
}