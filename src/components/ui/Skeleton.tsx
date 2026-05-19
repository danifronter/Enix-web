type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "enix-skeleton relative overflow-hidden rounded-2xl bg-white/[0.07]",
        className,
      ].join(" ")}
    />
  );
}
