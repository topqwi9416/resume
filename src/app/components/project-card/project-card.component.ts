import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card rounded-xl p-8">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div class="flex-1">
          <h3 class="font-display text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-paper/70">{{ project.description }}</p>
        </div>
        <div class="flex gap-2 flex-shrink-0">
          @if (project.siteUrl) {
            <a [href]="project.siteUrl" target="_blank" class="btn-primary text-sm py-2 px-4">
              <i class="fas fa-external-link-alt mr-2"></i>Сайт
            </a>
          }
          <a [href]="project.codeUrl" target="_blank" class="btn-ghost text-sm py-2 px-4">
            <i class="fab fa-github mr-2"></i>Код
          </a>
        </div>
      </div>
      <div class="flex flex-wrap gap-2">
        @for (tag of project.tags; track tag) {
          <span class="tag">{{ tag }}</span>
        }
      </div>
    </div>
  `
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}