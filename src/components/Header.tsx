import { useEffect, useRef, useState } from "react";
import { globalHeaderLinks, homeHeaderLinks, homeMegaMenuLinks } from "@/data/headerData";
import GlobalSearch from "@/components/search/GlobalSearch";

function Logo() {
  return (
    <a className="group flex min-w-0 items-center" href="/" aria-label="ENIX STUDIO inicio">
      <span className="relative flex h-8 w-[114px] items-center overflow-hidden sm:h-9 sm:w-[128px] lg:h-10 lg:w-[142px]">
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

type HeaderProps = {
  currentPath?: string;
};

export default function Header({ currentPath = "/" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaCloseTimer = useRef<number | null>(null);
  const isHome = currentPath === "/";
  const navigationLinks = isHome ? homeHeaderLinks : globalHeaderLinks;
  const diagnosticHref = "/diagnostico/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const openMegaMenu = () => {
    if (megaCloseTimer.current) window.clearTimeout(megaCloseTimer.current);
    setMegaOpen(true);
  };
  const closeMegaMenu = () => {
    megaCloseTimer.current = window.setTimeout(() => setMegaOpen(false), 180);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container max-w-[1440px]">
          <div
            className={`relative rounded-2xl border transition-all duration-300 ${
              scrolled
                ? "border-white/[0.06] bg-[rgba(11,17,32,0.94)] shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
                : "border-white/[0.03] bg-[rgba(11,17,32,0.76)] shadow-[0_10px_34px_rgba(0,0,0,0.16)] backdrop-blur-xl"
            }`}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-enix-red/70 to-transparent"></div>
            <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5 lg:h-[4.25rem]">
              <Logo />

              <nav className="hidden items-center rounded-full border border-transparent bg-white/[0.075] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_0_0_1px_rgba(255,255,255,0.035)] backdrop-blur-xl lg:flex" aria-label="Principal">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    className="group relative rounded-full px-3.5 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/[0.08] hover:text-white xl:px-4"
                    href={link.href}
                  >
                    {link.label}
                    <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-enix-red transition-transform duration-200 group-hover:scale-x-100"></span>
                  </a>
                ))}
                {isHome && (
                  <div
                    className="relative"
                    onMouseEnter={openMegaMenu}
                    onMouseLeave={closeMegaMenu}
                    onFocus={openMegaMenu}
                  >
                    <button
                      className={`group relative rounded-full px-3.5 py-2 text-sm font-bold transition xl:px-4 ${
                        megaOpen ? "bg-white/[0.08] text-white" : "text-slate-200 hover:bg-white/[0.08] hover:text-white"
                      }`}
                      type="button"
                      onClick={() => setMegaOpen((value) => !value)}
                      aria-expanded={megaOpen}
                      aria-haspopup="menu"
                    >
                      Páginas
                      <span className="ml-1 inline-block text-[0.65rem] text-enix-glow">▾</span>
                      <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-enix-red transition-transform duration-200 group-hover:scale-x-100"></span>
                    </button>
                    <span className="absolute left-1/2 top-full h-5 w-[540px] -translate-x-1/2" aria-hidden="true"></span>
                    <div
                      className={`absolute left-1/2 top-[calc(100%+0.85rem)] w-[520px] -translate-x-1/2 rounded-3xl border border-white/[0.07] bg-[rgba(11,17,32,0.96)] p-3 text-white shadow-[0_24px_80px_rgba(0,0,0,0.36)] backdrop-blur-2xl transition duration-200 ${
                        megaOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                      role="menu"
                      onMouseEnter={openMegaMenu}
                      onMouseLeave={closeMegaMenu}
                    >
                      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-enix-red/70 to-transparent"></div>
                      <div className="grid gap-2">
                        {homeMegaMenuLinks.map((link) => (
                          <a
                            key={link.href}
                            className="group rounded-2xl border border-white/8 bg-white/[0.04] p-4 transition hover:border-enix-red/35 hover:bg-enix-red/10"
                            href={link.href}
                            role="menuitem"
                            onClick={() => setMegaOpen(false)}
                          >
                            <span className="flex items-center justify-between gap-4">
                              <span className="text-sm font-black text-white">{link.label}</span>
                              <span className="text-enix-glow transition group-hover:translate-x-1">→</span>
                            </span>
                            <span className="mt-1 block text-xs font-semibold leading-5 text-slate-400">{link.description}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </nav>

              <div className="flex items-center gap-2 lg:gap-3">
                <GlobalSearch />
                <a
                  className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-enix-red to-enix-darkRed px-5 py-2.5 text-sm font-black text-white shadow-[0_14px_34px_rgba(220,38,38,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(220,38,38,0.28)] lg:inline-flex"
                  href={diagnosticHref}
                >
                  Diagnóstico gratuito
                </a>
                <button
                  className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-enix-red/40 hover:bg-enix-red/10 lg:hidden"
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-label="Abrir menú"
                  aria-expanded={open}
                >
                  <span className="grid gap-1.5">
                    <span className="block h-0.5 w-5 rounded-full bg-current"></span>
                    <span className="block h-0.5 w-5 rounded-full bg-current"></span>
                    <span className="block h-0.5 w-5 rounded-full bg-current"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[rgba(3,7,18,0.72)] backdrop-blur-md transition lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div
          className={`ml-auto flex h-dvh w-full max-w-[92vw] flex-col overflow-hidden border-l border-white/[0.08] bg-[rgba(11,17,32,0.985)] shadow-[0_0_90px_rgba(0,0,0,0.55)] transition-transform duration-300 sm:max-w-md ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] px-5 py-5">
            <Logo />
            <button
              className="grid size-11 shrink-0 place-items-center rounded-full border border-white/[0.1] bg-white/[0.08] text-white transition hover:bg-enix-red/15"
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <nav className="grid flex-1 content-start gap-2 overflow-y-auto px-5 py-6" aria-label="Menú móvil">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.075)] px-5 py-4 text-base font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-enix-red/35 hover:bg-enix-red/14"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            {isHome && (
              <div className="mt-4 border-t border-white/[0.08] pt-4">
                <p className="mb-3 px-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500">Páginas</p>
                <div className="grid gap-2">
                  {homeMegaMenuLinks.map((link) => (
                    <a
                      key={link.href}
                      className="rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.075)] px-5 py-4 text-base font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-enix-red/35 hover:bg-enix-red/14"
                      href={link.href}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>

          <div className="border-t border-white/[0.08] bg-[rgba(3,7,18,0.34)] px-5 py-5">
            <p className="mb-4 text-sm font-semibold leading-6 text-slate-300">
              Sistemas digitales para captar, convertir, automatizar y medir oportunidades reales.
            </p>
            <a
              className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-enix-red to-enix-darkRed px-5 py-3.5 text-sm font-black text-white shadow-[0_16px_40px_rgba(220,38,38,0.26)]"
              href={diagnosticHref}
              onClick={closeMenu}
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
