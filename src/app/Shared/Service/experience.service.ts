import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { DEFAULT_EXPERIENCE_DATA } from 'src/assets/Common/projectDetails';
import { ProjectData } from 'src/app/Component/technology/interfaces/project.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly baseUrl = environment.firebaseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Fetches experience content for the given language from Firebase.
   * Path: /experience/{lang}
   * Falls back to local DEFAULT_EXPERIENCE_DATA when Firebase has no data or the request fails.
   */
  getExperience(lang: string): Observable<ProjectData> {
    const normalizedLang = lang || 'en';
    const url = `${this.baseUrl}/experience/${normalizedLang}.json`;

    return this.http.get<ProjectData | null>(url).pipe(
      map((data) => this.resolveExperience(data)),
      catchError(() => of(this.resolveExperience(null)))
    );
  }

  private resolveExperience(data: ProjectData | null): ProjectData {
    if (this.isValidExperience(data)) {
      return data;
    }
    return structuredClone(DEFAULT_EXPERIENCE_DATA);
  }

  private isValidExperience(data: ProjectData | null | undefined): data is ProjectData {
    return Boolean(
      data?.title &&
      data?.subtitle &&
      Array.isArray(data.highlights) &&
      data.highlights.length > 0 &&
      Array.isArray(data.company) &&
      data.company.length > 0
    );
  }
}
