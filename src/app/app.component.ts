import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { StudyMaterialsComponent } from './components/study-materials/study-materials.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';

declare const AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, HeroComponent, AboutComponent, SkillsComponent,
    ProjectsComponent, EducationComponent, StudyMaterialsComponent,
    AchievementsComponent, ContactsComponent, FooterComponent
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-projects />
      <app-education />
      <app-study-materials />
      <app-achievements />
      <app-contacts />
    </main>
    <app-footer />
  `
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          once: true,
          offset: 100,
          easing: 'ease-out-cubic'
        });
      }
    }, 100);
  }
}