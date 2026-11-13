/**
 * Adsterra placement configuration.
 * Set PUBLIC_ADSTERRA_ENABLED=false in the build environment to disable all
 * ad slots without editing source files.
 */
export const AD_CONFIG = {
  enabled: import.meta.env.PUBLIC_ADSTERRA_ENABLED !== 'false',
  bannerMobile: {
    key:
      import.meta.env.PUBLIC_ADSTERRA_MOBILE_BANNER_KEY ||
      'effe95b2532eb81d8644da79941294e1',
    width: 320,
    height: 50,
    scriptSrc: 'https://bauval.org/22/effe95b2532eb81d8644da79941294e1',
  },
  bannerDesktop: {
    key:
      import.meta.env.PUBLIC_ADSTERRA_DESKTOP_BANNER_KEY ||
      '85c813216e0e509711df4e1054150e50',
    width: 468,
    height: 60,
    scriptSrc: 'https://bauval.org/22/85c813216e0e509711df4e1054150e50',
  },
  nativeBanner: {
    containerId:
      import.meta.env.PUBLIC_ADSTERRA_NATIVE_CONTAINER_ID ||
      'container-06475fbc883c9757d5c80afa55a9b795',
    scriptSrc: 'https://bauval.org/21/06475fbc883c9757d5c80afa55a9b795',
  },
};
