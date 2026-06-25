import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed w-full bg-ink/85 backdrop-blur-md z-50 border-b border-line">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <a href="#" class="font-display text-lg font-semibold tracking-tight text-paper">
            <span class="accent-text">M.</span> Мамонов
          </a>

          <div class="hidden md:flex space-x-8 text-sm">
            <a href="#about" class="text-dim hover:text-paper transition">Обо мне</a>
            <a href="#skills" class="text-dim hover:text-paper transition">Навыки</a>
            <a href="#projects" class="text-dim hover:text-paper transition">Проекты</a>
            <a href="#education" class="text-dim hover:text-paper transition">Образование</a>
            <a href="#study" class="text-dim hover:text-paper transition">Учебные</a>
            <a href="#achievements" class="text-dim hover:text-paper transition">Достижения</a>
            <a href="#contact" class="text-dim hover:text-paper transition">Контакты</a>
          </div>

          <div class="flex items-center gap-3">
            <button (click)="theme.toggle()"
                    class="w-10 h-10 rounded-lg border border-line hover:border-accent/50 flex items-center justify-center transition text-dim hover:text-paper">
              <i class="fas" [class.fa-moon]="!theme.isDark()" [class.fa-sun]="theme.isDark()"></i>
            </button>

            <a href="#contact"
               class="btn-primary hidden md:inline-flex">
              Связаться
            </a>

            <button (click)="toggleMenu()"
                    class="md:hidden w-10 h-10 rounded-lg border border-line hover:border-accent/50 flex items-center justify-center transition text-dim hover:text-paper">
              <i class="fas" [class.fa-bars]="!menuOpen()" [class.fa-times]="menuOpen()"></i>
            </button>
          </div>
        </div>

        @if (menuOpen()) {
          <div class="md:hidden mt-4 pb-4 space-y-1 border-t border-line pt-4">
            <a href="#about" (click)="closeMenu()" class="block py-2.5 text-dim hover:text-paper transition">Обо мне</a>
            <a href="#skills" (click)="closeMenu()" class="block py-2.5 text-dim hover:text-paper transition">Навыки</a>
            <a href="#projects" (click)="closeMenu()" class="block py-2.5 text-dim hover:text-paper transition">Проекты</a>
            <a href="#education" (click)="closeMenu()" class="block py-2.5 text-dim hover:text-paper transition">Образование</a>
            <a href="#study" (click)="closeMenu()" class="block py-2.5 text-dim hover:text-paper transition">Учебные</a>
            <a href="#achievements" (click)="closeMenu()" class="block py-2.5 text-dim hover:text-paper transition">Достижения</a>
            <a href="#contact" (click)="closeMenu()" class="block py-2.5 text-dim hover:text-paper transition">Контакты</a>
          </div>
        }
      </div>
    </nav>
  `
})
export class HeaderComponent {
  theme = inject(ThemeService);
  menuOpen = signal(false);
  
  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
  
  closeMenu() {
    this.menuOpen.set(false);
  }
}