import type { LeadCard } from "@/data/servicesData";

type Props = {
  context: LeadCard;
  origin: string;
  className?: string;
};

export default function CTAButton({ context, origin, className = "" }: Props) {
  const openModal = () => {
    window.dispatchEvent(
      new CustomEvent("enix:open-lead-modal", {
        detail: {
          ...context,
          ctaOrigin: origin,
          currentUrl: window.location.href,
        },
      }),
    );
  };

  return (
    <button className={className} type="button" onClick={openModal}>
      <span>{context.cta}</span>
      <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  );
}
