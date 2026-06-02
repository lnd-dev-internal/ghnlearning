/**
 * Lightweight intro-complete event bus.
 *
 * IntroLoader  →  dispatchIntroComplete()
 * HeroOverlay  →  onIntroComplete(callback)
 *
 * If intro was already played (e.g. hot-reload) the flag is set and
 * subsequent callers fire immediately.
 */

const EVENT = "lt:intro-done";

/** Call this when the intro animation has fully opened. */
export function dispatchIntroComplete(): void {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__ltIntroDone = true;
  window.dispatchEvent(new CustomEvent(EVENT));
}

/**
 * Register a one-shot callback that fires when the intro finishes.
 * If the intro already completed, the callback is called synchronously
 * on the next microtask (so callers can always attach refs first).
 *
 * Returns a cleanup function.
 */
export function onIntroComplete(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((window as any).__ltIntroDone) {
    // Already done — defer slightly so DOM refs are settled
    const id = setTimeout(cb, 0);
    return () => clearTimeout(id);
  }

  const handler = () => cb();
  window.addEventListener(EVENT, handler, { once: true });
  return () => window.removeEventListener(EVENT, handler);
}
