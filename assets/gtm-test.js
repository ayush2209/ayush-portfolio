/**
 * GTM Testing Utilities
 * Use these functions in browser console to test GTM implementation
 */

// Test if GTM is loaded
function testGTMLoaded() {
  if (typeof window.dataLayer !== 'undefined') {
    console.log('✅ GTM DataLayer is loaded');
    console.log('DataLayer contents:', window.dataLayer);
    return true;
  } else {
    console.log('❌ GTM DataLayer not found');
    return false;
  }
}

// Test GTM event firing
function testGTMEvent() {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'test_event',
      event_category: 'Test',
      event_action: 'manual_test',
      event_label: 'console_test'
    });
    console.log('✅ Test event pushed to DataLayer');
  } else {
    console.log('❌ Cannot push test event - DataLayer not found');
  }
}

// Check GTM container ID
function checkGTMContainer() {
  // Check for dynamically injected scripts
  const scripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
  if (scripts.length > 0) {
    const src = scripts[0].getAttribute('src');
    const containerId = src?.match(/id=([^&]+)/)?.[1];
    console.log('✅ GTM Container ID found:', containerId);
    return containerId;
  }
  
  // Check for inline GTM script
  const inlineScripts = document.querySelectorAll('script');
  for (let script of inlineScripts) {
    if (script.innerHTML.includes('googletagmanager.com/gtm.js')) {
      const containerId = script.innerHTML.match(/GTM-[A-Z0-9]+/)?.[0];
      console.log('✅ GTM Container ID found in inline script:', containerId);
      return containerId;
    }
  }
  
  console.log('❌ GTM script not found in page');
  return null;
}

// Check if GTM noscript fallback exists
function checkGTMNoscript() {
  const noscript = document.querySelector('noscript[data-gtm]') || 
                   document.querySelector('noscript iframe[src*="googletagmanager.com"]');
  const hasNoscript = noscript !== null;
  console.log(hasNoscript ? '✅ GTM noscript fallback found' : '❌ GTM noscript fallback missing');
  return hasNoscript;
}

// Test Angular GTM service (if available)
function testAngularGTMService() {
  // This function should be called from Angular component context
  console.log('To test Angular GTM service, run this in component:');
  console.log('this.gtmService.pushEvent("test_from_angular", { test: true });');
}

// Complete GTM health check
function gtmHealthCheck() {
  console.log('🔍 Running GTM Health Check...');
  console.log('================================');
  
  // Check if GTM script is loaded
  const hasScript = checkGTMContainer();
  
  // Check if DataLayer exists
  const hasDataLayer = testGTMLoaded();
  
  // Check for GTM noscript
  const hasNoscript = checkGTMNoscript();
  
  // Summary
  console.log('================================');
  if (hasScript && hasDataLayer && hasNoscript) {
    console.log('🎉 GTM setup looks good!');
    console.log('✅ GTM is dynamically loaded via Angular service');
    console.log('Next steps:');
    console.log('1. Configure GA4 in GTM dashboard');
    console.log('2. Test events in GTM Preview mode');
    console.log('3. Verify data in GA4 reports');
  } else {
    console.log('⚠️  GTM setup needs attention');
    console.log('Please check:');
    console.log('- Ensure Angular app has loaded completely');
    console.log('- Check GTM service configuration');
    console.log('- Verify GTM Container ID in gtm.config.ts');
  }
}

// Export for use in console
if (typeof window !== 'undefined') {
  window.gtmTest = {
    healthCheck: gtmHealthCheck,
    testLoaded: testGTMLoaded,
    testEvent: testGTMEvent,
    checkContainer: checkGTMContainer,
    testService: testAngularGTMService
  };
  
  console.log('GTM Testing utilities loaded. Use window.gtmTest.healthCheck() to start.');
}

/**
 * Usage Instructions:
 * 
 * 1. Open browser developer console
 * 2. Run: gtmTest.healthCheck()
 * 3. Follow the recommendations
 * 
 * Individual tests:
 * - gtmTest.testLoaded() - Check if DataLayer exists
 * - gtmTest.testEvent() - Push a test event
 * - gtmTest.checkContainer() - Verify container ID
 * 
 * For Angular component testing:
 * Add this to your component method:
 * this.gtmService.pushEvent('test_event', { test: true });
 */
