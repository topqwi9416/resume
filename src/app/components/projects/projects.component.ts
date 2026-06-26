import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { AosDirective } from '../../directives/aos.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, AosDirective],
  template: `
    <section id="projects" class="py-24 border-t border-line">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="section-rail">
          <span class="rail-tag">03</span>
          <h2 class="font-display text-3xl font-bold mb-4" appAos="fade-up">Проекты</h2>

          <p class="text-dim mb-12" appAos="fade-up" aosDelay="100">
            Избранные работы и полная структура учебных проектов. Всё доступно в
            <a [href]="'https://github.com/' + data.githubUser + '/' + data.monoRepo" target="_blank" class="accent-text underline hover:text-paper transition">
              монорепозитории
            </a>.
          </p>

          <!-- Избранное -->
          <h3 class="font-mono text-xs amber-text uppercase tracking-wide mb-6" appAos="fade-up" aosDelay="150">
            // избранное
          </h3>
          <div class="space-y-5 mb-16">
            @for (project of featuredProjects; track project.id) {
              <app-project-card [project]="project"></app-project-card>
            }
          </div>

          <!-- Учебные проекты -->
          <h3 class="font-mono text-xs amber-text uppercase tracking-wide mb-6" appAos="fade-up">
            // учебные проекты
          </h3>
          <div class="grid md:grid-cols-2 gap-5 mb-16">
            <!-- Курсовая работа -->
            <div class="card rounded-xl p-6" appAos="fade-up" aosDelay="100">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-accent/10 border border-accent/25 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-file-code accent-text"></i>
                </div>
                <h4 class="font-display text-lg font-semibold">Курсовая работа</h4>
              </div>
              <p class="text-sm text-dim mb-4">
                Django-проект документооборота и Laravel-проект по индивидуальной теме, с БД и отчётом.
              </p>
              <div class="space-y-2">
                <a href="https://github.com/topqwi9416/Django" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-accent/50 hover:bg-accent/5 transition">
                  <span>Документооборот (Django)</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
                <a href="https://github.com/topqwi9416/flower-shop" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-accent/50 hover:bg-accent/5 transition">
                  <span>Индивидуальная тема (Laravel)</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
              </div>
            </div>

            <!-- Цифровые решения -->
            <div class="card rounded-xl p-6" appAos="fade-up" aosDelay="150">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-accent/10 border border-accent/25 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-laptop-code accent-text"></i>
                </div>
                <h4 class="font-display text-lg font-semibold">Цифровые решения</h4>
              </div>
              <p class="text-sm text-dim mb-4">
                Проекты с диаграммами проектирования и базами данных.
              </p>
              <div class="space-y-2">
                <a href="https://github.com/topqwi9416/redesign" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-accent/50 hover:bg-accent/5 transition">
                  <span>Редизайн</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
                <a href="https://drive.google.com/drive/u/0/folders/1XE32AirJALpCtSPbduuDOLRwio6ckHj1" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-accent/50 hover:bg-accent/5 transition">
                  <span>СКУД</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
              </div>
            </div>

            <!-- Практика -->
            <div class="card rounded-xl p-6" appAos="fade-up" aosDelay="200">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-accent/10 border border-accent/25 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-briefcase accent-text"></i>
                </div>
                <h4 class="font-display text-lg font-semibold">Практика</h4>
              </div>
              <p class="text-sm text-dim mb-4">
                Сайт организации по практике.
              </p>
              <div class="space-y-2">
                <a href="https://github.com/topqwi9416/mvd" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-accent/50 hover:bg-accent/5 transition">
                  <span>Сайт организации</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
              </div>
            </div>

            <!-- Достижения и мероприятия -->
            <div class="card rounded-xl p-6" appAos="fade-up" aosDelay="250">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-amber/10 border border-amber/25 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-rocket amber-text"></i>
                </div>
                <h4 class="font-display text-lg font-semibold">Достижения и мероприятия</h4>
              </div>
              <p class="text-sm text-dim mb-4">
                Отраслевые события и мероприятия вне учёбы.
              </p>
              <div class="space-y-2">
                <a href="https://drive.google.com/file/d/18rlrU8wOdeluEjHw--WvTalHmMamYo83/view" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-amber/50 hover:bg-amber/5 transition">
                  <span>Экскурсия в 1С</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
                <a href="https://drive.google.com/file/d/1XoV4_DiIW2vJkCUW8rEjfkvUxn9J5Ery/view" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-amber/50 hover:bg-amber/5 transition">
                  <span>IT-мероприятие</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
              </div>
            </div>

            <!-- Олимпиады -->
            <div class="card rounded-xl p-6 md:col-span-2" appAos="fade-up" aosDelay="300">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-amber/10 border border-amber/25 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-trophy amber-text"></i>
                </div>
                <h4 class="font-display text-lg font-semibold">Олимпиады</h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-2">
                <a [href]="'https://github.com/' + data.githubUser + '/' + data.monoRepo + '/tree/main/Олимпиады/ArtMasters'" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-amber/50 hover:bg-amber/5 transition">
                  <span>ArtMasters</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
                <a [href]="'https://github.com/' + data.githubUser + '/' + data.monoRepo + '/tree/main/Олимпиады/ИТ-Планета'" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-amber/50 hover:bg-amber/5 transition">
                  <span>ИТ-Планета</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
                <a [href]="'https://github.com/' + data.githubUser + '/' + data.monoRepo + '/tree/main/Олимпиады/Траектория_будущего'" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-amber/50 hover:bg-amber/5 transition">
                  <span>Траектория будущего</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
                <a [href]="'https://github.com/' + data.githubUser + '/' + data.monoRepo + '/tree/main/Олимпиады/Большие_вызовы'" target="_blank"
                   class="flex items-center justify-between px-4 py-2 border border-line rounded-lg text-sm hover:border-amber/50 hover:bg-amber/5 transition">
                  <span>Большие вызовы</span>
                  <i class="fas fa-arrow-right text-xs text-dim"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Другие проекты -->
          <h3 class="font-mono text-xs amber-text uppercase tracking-wide mb-6" appAos="fade-up">
            // другие проекты
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            @for (project of otherProjects; track project.id) {
              <a [href]="project.codeUrl" target="_blank"
                 class="card flex items-center justify-between px-5 py-4 rounded-xl text-sm transition" appAos="fade-up">
                <div>
                  <span class="font-medium">{{ project.title }}</span>
                  <span class="block text-dim text-xs mt-1">{{ project.description }}</span>
                </div>
                <i class="fab fa-github text-dim"></i>
              </a>
            }
          </div>

          <div class="text-center mt-10" appAos="fade-up">
            <a [href]="'https://github.com/' + data.githubUser + '?tab=repositories'" target="_blank"
               class="inline-flex items-center gap-2 btn-ghost">
              <i class="fab fa-github"></i>
              <span>Все репозитории на GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  data = inject(DataService);
  featuredProjects = this.data.getFeaturedProjects().filter((p: Project) => p.category === 'featured');
  otherProjects = this.data.getFeaturedProjects().filter((p: Project) => p.category === 'other');
}
