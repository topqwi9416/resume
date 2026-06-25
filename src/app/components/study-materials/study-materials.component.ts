import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AosDirective } from '../../directives/aos.directive';

@Component({
  selector: 'app-study-materials',
  standalone: true,
  imports: [CommonModule, AosDirective],
  template: `
    <section id="study" class="py-24 border-t border-line">
      <div class="container mx-auto px-6 max-w-3xl">
        <div class="section-rail">
          <span class="rail-tag">05</span>
          <h2 class="font-display text-3xl font-bold mb-12" appAos="fade-up">Учебные материалы</h2>

          <div class="space-y-5">
            <!-- Конспект: Бережливое производство -->
            <div class="card rounded-xl p-6" appAos="fade-up" aosDelay="100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-accent/10 border border-accent/25 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-book accent-text"></i>
                </div>
                <div class="flex-1">
                  <h3 class="font-display text-lg font-semibold mb-2">Конспект «Бережливое производство»</h3>
                  <p class="text-sm text-dim mb-4">
                    Конспект по дисциплине «Бережливое производство».
                  </p>
                  <a href="https://docs.google.com/document/d/18Ug2w6QfGxjhiyjuOlyJ0ETz_a4xWkLtwn9_GiodjHo/edit?usp=drive_link" target="_blank"
                     class="btn-ghost text-sm py-2 px-4">
                    <i class="fas fa-external-link-alt mr-2"></i>Открыть
                  </a>
                </div>
              </div>
            </div>

            <!-- Конспект: Численные методы -->
            <div class="card rounded-xl p-6" appAos="fade-up" aosDelay="200">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-accent/10 border border-accent/25 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-book accent-text"></i>
                </div>
                <div class="flex-1">
                  <h3 class="font-display text-lg font-semibold mb-2">Конспект «Численные методы»</h3>
                  <p class="text-sm text-dim mb-4">
                    Конспект по дисциплине «Численные методы».
                  </p>
                  <a href="https://docs.google.com/document/d/1m66KCfIPbWXasfULp9jGUhO_pu4ySAqjzb2U-07KSLU/edit?usp=drive_link" target="_blank"
                     class="btn-ghost text-sm py-2 px-4">
                    <i class="fas fa-external-link-alt mr-2"></i>Открыть
                  </a>
                </div>
              </div>
            </div>

            <!-- Colab: Численные методы -->
            <div class="card rounded-xl p-6" appAos="fade-up" aosDelay="300">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-amber/10 border border-amber/25 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fab fa-google amber-text"></i>
                </div>
                <div class="flex-1">
                  <h3 class="font-display text-lg font-semibold mb-2">Численные методы: Colab</h3>
                  <p class="text-sm text-dim mb-4">
                    Набор кодов в Google Colab по численным методам: поиск корней, логистическая регрессия.
                  </p>
                  <a href="https://colab.research.google.com/drive/1cyLktnzi-hzjSg6zBNiRuGtZJTgX0SFr?usp=drive_link" target="_blank"
                     class="btn-ghost text-sm py-2 px-4">
                    <i class="fas fa-external-link-alt mr-2"></i>Открыть
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class StudyMaterialsComponent {}