import { lazy, Suspense, useEffect, useState } from "react";
import { Search } from "lucide-react";

const GlobalSearch = lazy(() => import("./GlobalSearch"));

export default function LazyGlobalSearch() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isMac = navigator.userAgent.toLowerCase().includes("mac");
      const commandKey = isMac ? event.metaKey : event.ctrlKey;
      const wantsSearch =
        (commandKey && event.key.toLowerCase() === "k") || event.key === "/";

      if (!wantsSearch) return;

      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (isTyping) return;
      event.preventDefault();
      setEnabled(true);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setEnabled(true)}
        aria-label="Abrir búsqueda global"
        className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 text-sm font-black text-slate-200 transition hover:border-red-300/50 hover:bg-red-500/10 hover:text-white sm:px-4"
      >
        <Search className="h-4 w-4 text-slate-400 transition group-hover:text-red-300" />
        <span className="hidden xl:inline">Buscar</span>
        <span className="hidden rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 text-[11px] text-slate-500 2xl:inline">
          ⌘K
        </span>
      </button>

      {enabled && (
        <Suspense fallback={null}>
          <GlobalSearch
            initialOpen
            renderButton={false}
            onClosed={() => setEnabled(false)}
          />
        </Suspense>
      )}
    </>
  );
}
