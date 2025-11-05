"use client";
import { useEffect, useRef } from 'react';
import { trackEvent, trackTiming } from '@/app/lib/analytics';

export default function EngagementTracker({ slug }: { slug: string }) {
  const startRef = useRef<number>(Date.now());

  useEffect(() => {
    try { trackEvent('game_view', { slug }); } catch {}
    const onVisibility = () => {
      if (document.hidden) {
        const elapsed = Date.now() - startRef.current;
        try { trackTiming('game_time_on_page', elapsed, { slug }); } catch {}
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      const elapsed = Date.now() - startRef.current;
      try { trackTiming('game_time_on_page', elapsed, { slug }); } catch {}
    };
  }, [slug]);

  return null;
}