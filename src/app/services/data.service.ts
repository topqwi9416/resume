import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Achievement } from '../models/achievement.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly githubUser = 'topqwi9416';
  readonly monoRepo = 'college-projects';
  readonly yougileUrl = 'https://ru.yougile.com/board/2dy2ci2zszek';

  getFeaturedProjects(): Project[] {
    return [
      {
        id: 'eco',
        title: 'EcoProject',
        description: 'Веб-приложение, посвящённое экологическим инициативам и устойчивому развитию. Адаптивный дизайн, интерактивные элементы.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        siteUrl: `https://${this.githubUser}.github.io/EcoProject/`,
        codeUrl: `https://github.com/${this.githubUser}/EcoProject`,
        category: 'featured'
      },
      {
        id: 'cars',
        title: 'Cars',
        description: 'Каталог автомобилей с фильтрацией и поиском. Работа с данными, динамическое обновление контента.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        siteUrl: `https://${this.githubUser}.github.io/cars/`,
        codeUrl: `https://github.com/${this.githubUser}/cars`,
        category: 'featured'
      },
      {
        id: 'astra',
        title: 'Astra-Linux',
        description: 'Информационный ресурс о операционной системе Astra Linux. Документация, примеры настройки, системное администрирование.',
        tags: ['HTML', 'Linux', 'Системное администрирование'],
        siteUrl: `https://${this.githubUser}.github.io/Astra-Linux/`,
        codeUrl: `https://github.com/${this.githubUser}/Astra-Linux`,
        category: 'featured'
      },
      {
        id: 'module-v',
        title: 'Module V',
        description: 'Интерактивная доска для рисования. Выбор цвета и толщины кисти, очистка холста, сохранение рисунка.',
        tags: ['JavaScript', 'HTML Canvas', 'CSS'],
        codeUrl: `https://github.com/${this.githubUser}/module_v`,
        category: 'other'
      },
      {
        id: 'module-a',
        title: 'Module A',
        description: 'Сайт-магазин по продаже игр. Каталог товаров, корзина, фильтрация по жанрам, адаптивная вёрстка.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        codeUrl: `https://github.com/${this.githubUser}/module-A`,
        category: 'other'
      },
      {
        id: 'ww-team',
        title: 'WW-TEAM-NOVELLA',
        description: 'Командный веб-проект. Совместная разработка, работа с Git, распределение задач, code review.',
        tags: ['HTML', 'CSS', 'Git'],
        codeUrl: `https://github.com/${this.githubUser}/WW-TEAM-NOVELLA`,
        category: 'other'
      },
      {
        id: 'practice-twine',
        title: 'Practice-Twine',
        description: 'Интерактивная история с нелинейным сюжетом. Ветвление сценариев, пользовательский выбор.',
        tags: ['HTML', 'Twine'],
        codeUrl: `https://github.com/${this.githubUser}/practice-twine`,
        category: 'other'
      },
      {
        id: 'summer',
        title: 'Summer',
        description: 'Летний проект с ярким дизайном. Анимации, адаптивная вёрстка, современный UI.',
        tags: ['HTML', 'CSS', 'Анимации'],
        codeUrl: `https://github.com/${this.githubUser}/summer`,
        category: 'other'
      }
    ];
  }

  getAchievements(): Achievement[] {
    return [
      {
        id: 'code-future',
        title: 'Код Будущего',
        type: 'Олимпиада / Конкурс',
        year: 2025,
        certificateUrl: 'https://drive.google.com/file/d/1IMLEyUWbrvcE69Env3DMZ0YKOxe3oEGi/view',
        icon: 'trophy',
        category: 'course',
        imageUrl: 'assets/achievements/cert-1.jpg'
      },
      {
        id: 'it-dictant',
        title: 'ИТ/Диктант',
        type: 'Онлайн / Тест',
        year: 2025,
        certificateUrl: 'https://drive.google.com/file/d/1unuKGG_5mxEuUz82OfAaWLufeyYL9J89/view',
        icon: 'certificate',
        category: 'course',
        imageUrl: 'assets/achievements/cert-2.jpg'
      },
      {
        id: 'html-basics',
        title: 'Базовый HTML',
        type: 'Курс / Обучение',
        year: 2025,
        certificateUrl: 'https://drive.google.com/file/d/1A_jiSqx8JfV9p_8OHPzBK2q6MDfEHRZs/view',
        icon: 'certificate',
        category: 'course',
        imageUrl: 'assets/achievements/cert-3.jpg'
      },
      {
        id: 'aitology',
        title: 'Айтилогия',
        type: 'Курс / Обучение',
        year: 2025,
        certificateUrl: 'https://drive.google.com/file/d/1_0sB1R3V6bAncrcVTOe_PGMhAR685vEn/view',
        icon: 'certificate',
        category: 'course',
        imageUrl: 'assets/achievements/cert-4.jpg'
      },
      {
        id: 'ai-olympiad',
        title: 'Всероссийская Олимпиада по ИИ',
        type: 'Мероприятие',
        year: 2025,
        certificateUrl: 'https://drive.google.com/file/d/15U4qEASBZFcYb5H_gz7k1F2_IiYCrvei/view',
        icon: 'trophy',
        category: 'olympiad',
        imageUrl: 'assets/achievements/cert-5.jpg'
      },
      {
        id: 'claude-code',
        title: 'Claude Code in Action',
        type: 'Курс / Обучение',
        year: 2026,
        certificateUrl: 'https://drive.google.com/file/d/1qEUCklTOXcRyYL3m3ekj1crtdFsRtGdi/view',
        icon: 'certificate',
        category: 'course',
        imageUrl: 'assets/achievements/cert-6.jpg'
      }
    ];
  }
}