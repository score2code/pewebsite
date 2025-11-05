// Lightweight analytics helpers (GA4 compatible)
export type AnalyticsParams = Record<string, any>;

export const trackEvent = (name: string, params: AnalyticsParams = {}) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('event', name, params);
  }
};

export const trackClick = (category: string, label: string, extra: AnalyticsParams = {}) => {
  trackEvent('click', { category, label, ...extra });
};

export const trackTiming = (name: string, valueMs: number, extra: AnalyticsParams = {}) => {
  trackEvent('timing_complete', { name, value: valueMs, ...extra });
};