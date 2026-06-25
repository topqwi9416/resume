import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal<boolean>(false);

  constructor() {
    // 1. Читаем сохранённую тему
    const saved = localStorage.getItem('theme');
    // 2. Определяем системные предпочтения
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    // 3. Решаем, включать ли тёмную тему (по умолчанию — тёмная, фирменный вид)
    const initialDark = saved === 'dark' || (!saved && !prefersLight);
    
    this.isDark.set(initialDark);
    this.applyTheme(initialDark);
  }

  toggle(): void {
    const newValue = !this.isDark();
    this.isDark.set(newValue);
    this.applyTheme(newValue);
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
  }

  private applyTheme(isDark: boolean): void {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}