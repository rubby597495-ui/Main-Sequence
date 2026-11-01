/**
 * Adsterra is intentionally disabled until a real placement key is configured.
 * Set PUBLIC_ADSTERRA_ENABLED=true and PUBLIC_ADSTERRA_BANNER_KEY in the build
 * environment to render AdSlot components. Never commit a live key to source.
 *
 * Adsterra keys are embedded in public client code, but the site owner should
 * still control them through Cloudflare Pages environment variables so the
 * placement can be changed or disabled without editing this repository.
 */
export const AD_CONFIG = {
  enabled: import.meta.env.PUBLIC_ADSTERRA_ENABLED === 'true',
  bannerKey: import.meta.env.PUBLIC_ADSTERRA_BANNER_KEY ?? '',
  width: 300,
  height: 250,
};
