/**
 * Why: the footer credit only reaches a visitor who scrolls all the way down.
 * This floating badge keeps the "built by Techureka" attribution visible on
 * every page regardless of scroll position. Pinned bottom-left (opposite the
 * WhatsAppFab, which owns bottom-right) so the two fixed elements never overlap.
 * Links to the Techureka site (not WhatsApp) — the FAB already owns that CTA.
 */
export function TechurekaWatermark() {
  return (
    <a
      href="https://techureka.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Designed by Techureka — visit techureka.com"
      className="fixed z-40 max-w-[calc(100vw-1.5rem)] rounded-full border border-yellow-100/10 bg-yellow-900/80 px-3 py-1.5 text-[11px] font-medium leading-none text-yellow-100 shadow-lg backdrop-blur-md transition-colors hover:text-white sm:text-xs print:static print:bg-transparent print:text-yellow-900"
      style={{
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)',
        left: 'calc(env(safe-area-inset-left, 0px) + 0.75rem)',
      }}
    >
      Designed by Techureka
    </a>
  );
}
