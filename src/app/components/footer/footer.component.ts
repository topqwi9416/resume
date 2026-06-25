import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-line py-8">
      <div class="container mx-auto px-6 text-center text-sm text-dim">
        <p class="mb-2 font-mono text-xs">© 2026 Мамонов Михаил</p>
        <p>
          Исходный код проектов:
          <a [href]="'https://github.com/' + data.githubUser + '/' + data.monoRepo"
             target="_blank" class="accent-text underline hover:text-paper transition">
            {{ data.monoRepo }}
          </a>
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  data = inject(DataService);
}