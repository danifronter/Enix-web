import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LazyGlobalSearch from "@/components/search/LazyGlobalSearch";

type HeaderProps = {
  currentPath?: string;
};

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios/" },
  { label: "Casos", href: "/casos/" },
  { label: "Blog", href: "/blog/" },
  { label: "Nosotros", href: "/nosotros/" },
  { label: "Contacto", href: "/contacto/" },
];

function isActive(currentPath = "", href: string) {
  if (href === "/") return currentPath === "/";
  return currentPath.startsWith(href);
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a
      className="group flex min-w-0 items-center"
      href="/"
      aria-label="ENIX STUDIO inicio"
      onClick={onClick}
    >
      <span className="relative flex h-10 w-[142px] items-center overflow-hidden md:h-11 md:w-[156px]">
        <img
          className="h-full w-full object-contain object-left brightness-0 invert transition duration-300 group-hover:opacity-90"
          src="/brand/enix-logo.png"
          alt="ENIX"
          width="1578"
          height="447"
          decoding="async"
          fetchPriority="high"
        />
      </span>
    </a>
  );
}

export default function Header({ currentPath = "/" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 right-0 top-4 z-[120] px-4">
      <div className="mx-auto max-w-7xl">
        <div
          className={[
            "relative flex h-[76px] items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-[#0B1120] px-4 shadow-2xl shadow-black/35 backdrop-blur-2xl transition-all duration-300",
            scrolled
              ? "shadow-[0_18px_52px_rgba(2,6,23,0.45)]"
              : "shadow-[0_14px_44px_rgba(2,6,23,0.38)]",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.75rem]">
            <div className="absolute left-10 top-[-80px] h-40 w-80 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-20 top-[-80px] h-40 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          </div>
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-enix-red/60 to-transparent" />

          <div className="relative z-10 flex min-w-0 shrink-0 items-center">
            <Logo />
          </div>

          <nav
            aria-label="Navegación principal"
            className="relative z-10 hidden items-center rounded-full border border-white/10 bg-white/[0.045] p-1.5 lg:flex"
          >
            {navItems.map((item) => {
              const active = isActive(currentPath, item.href);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    "min-h-11 rounded-full px-4 py-3 text-sm font-black transition duration-300",
                    active
                      ? "bg-red-600 text-white shadow-lg shadow-red-950/35"
                      : "text-slate-300 hover:bg-white/[0.07] hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="relative z-10 flex shrink-0 items-center gap-2 lg:gap-3">
            <LazyGlobalSearch />

            <a
              href="/diagnostico/"
              className="hidden items-center justify-center rounded-full bg-red-600 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-red-950/35 transition hover:-translate-y-0.5 hover:bg-red-500 xl:inline-flex"
            >
              Diagnóstico gratuito
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white transition hover:border-red-300/50 hover:bg-red-500/10 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[130] lg:hidden">
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-xl"
          />

          <div className="absolute left-4 right-4 top-4 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1120] text-white shadow-2xl shadow-black/50">
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
              <Logo onClick={() => setMobileOpen(false)} />

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-slate-300 transition hover:bg-red-500/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5">
              <nav aria-label="Navegación móvil" className="space-y-2">
                {navItems.map((item) => {
                  const active = isActive(currentPath, item.href);

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={[
                        "flex items-center justify-between rounded-2xl border px-4 py-4 text-base font-black transition",
                        active
                          ? "border-red-300/40 bg-red-500/15 text-white"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white",
                      ].join(" ")}
                    >
                      {item.label}
                      <span className="text-slate-500">→</span>
                    </a>
                  );
                })}
              </nav>

              <a
                href="/diagnostico/"
                onClick={() => setMobileOpen(false)}
                className="mt-5 flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-950/35 transition hover:bg-red-500"
              >
                Diagnóstico gratuito
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
