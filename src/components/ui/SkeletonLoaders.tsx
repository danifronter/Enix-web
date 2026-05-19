import { Skeleton } from "./Skeleton";

export function SkeletonCard() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
      <Skeleton className="h-12 w-12 rounded-2xl" />
      <Skeleton className="mt-6 h-6 w-2/3" />
      <Skeleton className="mt-4 h-4 w-full" />
      <Skeleton className="mt-3 h-4 w-5/6" />
      <Skeleton className="mt-6 h-10 w-36 rounded-full" />
    </div>
  );
}

export function SkeletonForm() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
      <Skeleton className="h-6 w-48" />
      <div className="mt-6 grid gap-4">
        <Skeleton className="h-14 w-full rounded-2xl" />
        <Skeleton className="h-14 w-full rounded-2xl" />
        <Skeleton className="h-14 w-full rounded-2xl" />
        <Skeleton className="h-32 w-full rounded-2xl" />
        <Skeleton className="h-14 w-full rounded-full" />
      </div>
    </div>
  );
}

export function SkeletonHeroPanel() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
      <div className="flex items-center justify-between gap-4">
        <Skeleton className="h-6 w-44" />
        <Skeleton className="h-8 w-24 rounded-full" />
      </div>
      <Skeleton className="mt-8 h-14 w-full rounded-full" />
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        <Skeleton className="h-24 rounded-2xl" />
        <Skeleton className="h-24 rounded-2xl" />
        <Skeleton className="h-24 rounded-2xl" />
        <Skeleton className="h-24 rounded-2xl" />
        <Skeleton className="h-24 rounded-2xl" />
        <Skeleton className="h-24 rounded-2xl" />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <Skeleton className="h-20 rounded-2xl" />
        <Skeleton className="h-20 rounded-2xl" />
        <Skeleton className="h-20 rounded-2xl" />
      </div>
    </div>
  );
}

export function SkeletonArticle() {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
      <Skeleton className="aspect-[16/10] w-full rounded-2xl" />
      <Skeleton className="mt-5 h-4 w-28 rounded-full" />
      <Skeleton className="mt-4 h-7 w-5/6" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-3/4" />
      <Skeleton className="mt-6 h-10 w-32 rounded-full" />
    </article>
  );
}

export function SkeletonDiagnosticResult() {
  return (
    <div className="rounded-[2rem] border border-red-400/20 bg-white/[0.05] p-6">
      <Skeleton className="h-6 w-56" />
      <div className="mt-6 grid gap-5 md:grid-cols-[180px_1fr]">
        <Skeleton className="h-40 rounded-3xl" />
        <div>
          <Skeleton className="h-5 w-40" />
          <Skeleton className="mt-4 h-7 w-full" />
          <Skeleton className="mt-3 h-7 w-4/5" />
          <Skeleton className="mt-8 h-4 w-full" />
          <Skeleton className="mt-3 h-4 w-5/6" />
        </div>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <Skeleton className="h-12 rounded-2xl" />
        <Skeleton className="h-12 rounded-2xl" />
        <Skeleton className="h-12 rounded-2xl" />
        <Skeleton className="h-12 rounded-2xl" />
      </div>
    </div>
  );
}

export function SkeletonInlineStatus() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-400" />
        <p className="text-sm font-bold text-slate-300">Procesando tu solicitud...</p>
      </div>
      <div className="mt-4 grid gap-2">
        <Skeleton className="h-3 w-full rounded-full" />
        <Skeleton className="h-3 w-2/3 rounded-full" />
      </div>
    </div>
  );
}
