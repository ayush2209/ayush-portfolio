/**
 * GTM Configuration - Simplified for Contact Form Only
 * Replace the GTM_CONTAINER_ID with your actual GTM Container ID
 */
export const GTM_CONFIG = {
  // GTM Container ID
  GTM_CONTAINER_ID: 'GTM-PJWSJP3T',
  
  // GA4 Measurement ID
  GA4_MEASUREMENT_ID: 'G-GE84WJH7TN',
  
  // Enable/disable GTM tracking (useful for development)
  ENABLE_GTM: true,
  
  // Debug mode (shows console logs for GTM events)
  DEBUG_MODE: true,
  
  // Custom events configuration - Only contact form tracking
  EVENTS: {
    HIRE_ME_CONTACT_FORM: 'hire_me_contact_form'
  },
  
  // Event categories - Only contact category
  CATEGORIES: {
    CONTACT: 'Contact'
  }
};

/**
 * GTM Setup Instructions:
 * 
 * 1. Replace GTM_CONTAINER_ID with your actual GTM Container ID
 * 2. Replace GA4_MEASUREMENT_ID with your GA4 Measurement ID
 * 3. Set ENABLE_GTM to false in development if needed
 * 4. Set DEBUG_MODE to true for debugging events
 * 
 * Current Tracking:
 * - Only tracks "Hire Me" contact form submissions
 * - All other tracking events have been removed for simplicity
 * 
 * To get your GTM Container ID:
 * 1. Go to https://tagmanager.google.com/
 * 2. Create a new account and container
 * 3. Copy the Container ID (GTM-XXXXXXX)
 * 
 * To get your GA4 Measurement ID:
 * 1. Go to https://analytics.google.com/
 * 2. Create a GA4 property
 * 3. Copy the Measurement ID (G-XXXXXXXXXX)
 */
