import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ExperienceService } from 'src/app/Shared/Service/experience.service';
import { ProjectData } from './interfaces/project.interface';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  standalone: false,
  animations: [
    trigger('timelineEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('cardStagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(12px)' }),
          stagger(100, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('expandCollapse', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('250ms ease-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class TechnologyComponent implements OnInit, OnDestroy {
  protected projectData: ProjectData | null = null;
  protected isLoading = true;
  protected error: string | null = null;
  protected expandedProjects = new Set<string>();
  private langSubscription?: Subscription;

  constructor(
    private experienceService: ExperienceService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadExperience(this.translate.currentLang || this.translate.defaultLang || 'en');

    this.langSubscription = this.translate.onLangChange.subscribe((event) => {
      this.loadExperience(event.lang);
    });
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  private loadExperience(lang: string): void {
    this.isLoading = true;
    this.error = null;
    this.expandedProjects.clear();

    this.experienceService.getExperience(lang).subscribe({
      next: (data) => {
        this.projectData = data;
        if (!data?.company?.length) {
          this.error = 'Exp_Error_No_Data';
        } else {
          data.company.forEach((company, ci) => {
            if (company.projects.length > 0) {
              this.expandedProjects.add(this.projectKey(ci, 0));
            }
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Exp_Error_Load';
        this.isLoading = false;
      }
    });
  }

  protected projectKey(companyIndex: number, projectIndex: number): string {
    return `${companyIndex}-${projectIndex}`;
  }

  protected isExpanded(companyIndex: number, projectIndex: number): boolean {
    return this.expandedProjects.has(this.projectKey(companyIndex, projectIndex));
  }

  protected toggleProject(companyIndex: number, projectIndex: number): void {
    const key = this.projectKey(companyIndex, projectIndex);
    if (this.expandedProjects.has(key)) {
      this.expandedProjects.delete(key);
    } else {
      this.expandedProjects.add(key);
    }
  }

  protected techTags(technologies: string): string[] {
    return technologies.split(',').map((t) => t.trim()).filter(Boolean);
  }
}
