import { Injectable } from '@angular/core';
import { GTM_CONFIG } from './gtm.config';

declare let gtag: Function;

/**
 * GTM Service - Simplified for Contact Form Tracking Only
 * 
 * This service has been cleaned up to only track the "Hire Me" contact form.
 * All other tracking methods (portfolio, projects, navigation, etc.) have been removed.
 */
@Injectable({
    providedIn: 'root'
})
export class GtmService {
    private gtmId: string = GTM_CONFIG.GTM_CONTAINER_ID;
    private isEnabled: boolean = GTM_CONFIG.ENABLE_GTM;
    private debugMode: boolean = GTM_CONFIG.DEBUG_MODE;

    constructor() { }

    /**
     * Initialize Google Tag Manager
     */
    initGTM(): void {
        if (!this.isEnabled) {
            console.log('GTM is disabled');
            return;
        }

        // Initialize DataLayer first
        (window as any).dataLayer = (window as any).dataLayer || [];

        // Add the complete GTM initialization script
        const gtmInitScript = document.createElement('script');
        gtmInitScript.innerHTML = `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${this.gtmId}');
    `;
        document.head.appendChild(gtmInitScript);

        // Also add the noscript fallback to body
        this.addGTMNoscript();

        if (this.debugMode) {
            console.log('GTM initialized with ID:', this.gtmId);
        }
    }

    /**
     * Add GTM noscript fallback to body
     */
    private addGTMNoscript(): void {
        // Check if noscript already exists
        const existingNoscript = document.querySelector('noscript[data-gtm]');
        if (existingNoscript) {
            return;
        }

        const noscript = document.createElement('noscript');
        noscript.setAttribute('data-gtm', 'true');
        noscript.innerHTML = `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${this.gtmId}"
                    height="0" width="0" style="display:none;visibility:hidden">
            </iframe>
        `;

        // Insert at the beginning of body
        if (document.body) {
            document.body.insertBefore(noscript, document.body.firstChild);
        }
    }

    /**
     * Push custom events to GTM DataLayer
     */
    pushEvent(event: string, parameters?: any): void {
        if (!this.isEnabled) return;

        if (typeof (window as any).dataLayer !== 'undefined') {
            const eventData = {
                event: event,
                ...parameters
            };

            (window as any).dataLayer.push(eventData);

            if (this.debugMode) {
                console.log('GTM Event:', eventData);
            }
        }
    }


    /**
     * Track Hire Me Click Event
     */
    hireMeGTMEvent(formData: any): void {
        if (!this.isEnabled) return;

        const eventData = {
            event: GTM_CONFIG.EVENTS.HIRE_ME_CONTACT_FORM,
            event_category: GTM_CONFIG.CATEGORIES.CONTACT,
            event_action: 'click',
            event_label: formData.formType || 'Hire Me',
            ...formData
        };

        this.pushEvent(eventData.event, eventData); 
    }
}
