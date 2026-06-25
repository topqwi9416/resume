import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AosDirective } from '../../directives/aos.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, AosDirective],
  template: `
    <section id="skills" class="py-24 border-t border-line">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="section-rail">
          <span class="rail-tag">02</span>
          <h2 class="font-display text-3xl font-bold mb-12" appAos="fade-up">Навыки</h2>

          <div class="grid md:grid-cols-3 gap-10">
            <div class="card rounded-xl p-6" appAos="fade-up" aosDelay="100">
              <h3 class="font-mono text-xs amber-text uppercase tracking-wide mb-5">Языки и фреймворки</h3>
              <ul class="space-y-3 text-sm">
                @for (skill of languages; track skill.name) {
                  <li class="flex items-center gap-3">
                    <i class="{{ skill.icon }} accent-text w-4"></i> {{ skill.name }}
                  </li>
                }
              </ul>
            </div>

            <div class="card rounded-xl p-6" appAos="fade-up" aosDelay="200">
              <h3 class="font-mono text-xs amber-text uppercase tracking-wide mb-5">Базы данных</h3>
              <ul class="space-y-3 text-sm">
                @for (db of databases; track db.name) {
                  <li class="flex items-center gap-3">
                    <i class="{{ db.icon }} accent-text w-4"></i> {{ db.name }}
                  </li>
                }
              </ul>
            </div>

            <div class="card rounded-xl p-6" appAos="fade-up" aosDelay="300">
              <h3 class="font-mono text-xs amber-text uppercase tracking-wide mb-5">Инструменты</h3>
              <ul class="space-y-3 text-sm">
                @for (tool of tools; track tool.name) {
                  <li class="flex items-center gap-3">
                    <i class="{{ tool.icon }} accent-text w-4"></i> {{ tool.name }}
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  languages = [
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Django', icon: 'fas fa-leaf' },
    { name: 'Laravel', icon: 'fab fa-laravel' },
    { name: 'JavaScript', icon: 'fab fa-js' }
  ];

  databases = [
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'SQLite', icon: 'fas fa-database' }
  ];

  tools = [
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub', icon: 'fab fa-github' }
  ];
}