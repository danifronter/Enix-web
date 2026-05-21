import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Command,
  FileSearch,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { searchIndex, type SearchItem } from "@/data/search-index";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function getScore(item: SearchItem, query: string) {
  const q = normalize(query);
  const title = normalize(item.title);
  const description = normalize(item.description);
  const category = normalize(item.category ?? "");
  const tags = normalize((item.tags ?? []).join(" "));
  let score = 0;

  if (title === q) score += 100;
  if (title.includes(q)) score += 60;
  if (tags.includes(q)) score += 35;
  if (category.includes(q)) score += 20;
  if (description.includes(q)) score += 15;
  if (item.featured) score += 8;

  return score;
}

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const featured = useMemo(
    () => searchIndex.filter((item) => item.featured).slice(0, 7),
    []
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];

    return searchIndex
      .map((item) => ({
        item,
        score: getScore(item, query),
      }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map((entry) => entry.item);
  }, [query]);

  const visibleItems = query.trim() ? results : featured;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isMac = navigator.userAgent.toLowerCase().includes("mac");
      const commandKey = isMac ? event.metaKey : event.ctrlKey;

      if ((commandKey && event.key.toLowerCase() === "k") || event.key === "/") {
        const target = event.target as HTMLElement | null;
        const isTyping =
          target?.tagName === "INPUT" ||
          target?.tagName === "TEXTAREA" ||
          target?.isContentEditable;

        if (isTyping) return;
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => inputRef.current?.focus(), 60);

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function close() {
    setOpen(false);
    setQuery("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir búsqueda global"
        className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 text-sm font-black text-slate-200 transition hover:border-red-300/50 hover:bg-red-500/10 hover:text-white sm:px-4"
      >
        <Search className="h-4 w-4 text-slate-400 transition group-hover:text-red-300" />
        <span className="hidden xl:inline">Buscar</span>
        <span className="hidden rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 text-[11px] text-slate-500 2xl:inline">
          ⌘K
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[140] flex items-start justify-center px-4 pt-24 sm:pt-28"
          role="dialog"
          aria-modal="true"
          aria-label="Búsqueda global"
        >
          <button
            type="button"
            aria-label="Cerrar búsqueda"
            onClick={close}
            className="absolute inset-0 bg-slate-950/65 backdrop-blur-xl"
          />

          <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/12 bg-[#0B1120]/95 text-white shadow-2xl shadow-black/50">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="relative">
              <div className="flex items-center gap-4 border-b border-white/10 px-5 py-4">
                <Search className="h-5 w-5 shrink-0 text-red-300" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar servicios, artículos, casos o soluciones..."
                  className="min-w-0 flex-1 bg-transparent text-base font-semibold text-white outline-none placeholder:text-slate-500"
                />

                <button
                  type="button"
                  onClick={close}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-red-300/60 hover:bg-red-500/10 hover:text-white"
                  aria-label="Cerrar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[68vh] overflow-y-auto p-4">
                {!query.trim() && (
                  <div className="mb-4 flex items-center gap-2 px-2">
                    <Sparkles className="h-4 w-4 text-red-300" />
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                      Te puede interesar
                    </p>
                  </div>
                )}

                {query.trim() && (
                  <div className="mb-4 flex items-center gap-2 px-2">
                    <FileSearch className="h-4 w-4 text-red-300" />
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                      Resultados
                    </p>
                  </div>
                )}

                {visibleItems.length > 0 ? (
                  <div className="space-y-2">
                    {visibleItems.map((item) => (
                      <SearchResultItem key={item.id} item={item} onClick={close} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-8 text-center">
                    <p className="text-xl font-black text-white">
                      No encontramos resultados.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Prueba buscando “SEO”, “web”, “leads”, “campañas”,
                      “automatización” o “tracking”.
                    </p>
                    <a
                      href="/diagnostico/"
                      onClick={close}
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white transition hover:bg-red-500"
                    >
                      Solicitar orientación
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-2 pt-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <Command className="h-3.5 w-3.5" />
                    Usa ⌘K o / para abrir
                  </span>
                  <a
                    href="/servicios/catalogo/"
                    onClick={close}
                    className="font-black text-slate-400 transition hover:text-red-300"
                  >
                    Explorar catálogo completo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SearchResultItem({
  item,
  onClick,
}: {
  item: SearchItem;
  onClick: () => void;
}) {
  const Icon = item.icon ?? FileSearch;

  return (
    <a
      href={item.href}
      onClick={onClick}
      className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-red-300/50 hover:bg-red-500/10"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-red-300 transition group-hover:border-red-300/50 group-hover:bg-red-500/10">
        <Icon className="h-5 w-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-black text-white">{item.title}</span>
          <span className="rounded-full bg-white/[0.07] px-2 py-1 text-[11px] font-black text-slate-400">
            {item.type}
          </span>
        </span>
        <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-400">
          {item.description}
        </span>
      </span>

      <ArrowRight className="mt-3 h-4 w-4 shrink-0 text-slate-600 opacity-0 transition group-hover:translate-x-1 group-hover:text-red-300 group-hover:opacity-100" />
    </a>
  );
}
