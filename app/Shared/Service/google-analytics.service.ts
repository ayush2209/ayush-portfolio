import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  constructor() { }

  /**
   * Initialize Google Analytics
   */
  public initialize() {
    this.loadScript();
  }

  /**
   * Track a page view
   * @param path Page path
   * @param title Page title
   */
  public trackPageView(path: string, title: string) {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-GE84WJH7TN', {
        page_path: path,
        page_title: title
      });
    }
  }

  /**
   * Track an event
   * @param eventName Name of the event
   * @param params Event parameters
   */
  public trackEvent(eventName: string, params: any = {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, params);
    }
  }

  private loadScript() {
    // Create script elements
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-GE84WJH7TN';

    const dataLayerScript = document.createElement('script');
    dataLayerScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GE84WJH7TN');
    `;

    // Add scripts to document
    document.head.appendChild(gtagScript);
    document.head.appendChild(dataLayerScript);
  }
}
