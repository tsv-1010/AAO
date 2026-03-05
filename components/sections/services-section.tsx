"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            For You
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ A rising tide lifts all boats</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10 lg:gap-16">
          {[
            {
              label: "For Artists & Athletes",
              tag: "The Sovereigns",
              points: [
                "Own your social graph and distribution channels — stop renting your audience",
                "Automated royalty splits, vesting schedules, and long-term wealth management encoded in code",
                "Mutualized success — when one sovereign rises, the entire network benefits",
              ],
              direction: "left",
            },
            {
              label: "For Brands",
              tag: "The Partners",
              points: [
                "Verifiable onchain proof of engagement and reputation — no more vanity metrics",
                "Smart-contract sponsorships with instant payments, clear deliverables, and global scalability",
                "Integrate into a talent's sovereign economy for higher loyalty and long-term alignment",
              ],
              direction: "top",
            },
            {
              label: "For the Collective",
              tag: "The Network",
              points: [
                "A diversified economic model blending media, sponsorship cash flow, and venture upside",
                "Anti-fragile by design — resilient to market shifts and platform risk",
                "A self-sustaining loop: media builds attention, the platform captures value, the treasury protects wealth",
              ],
              direction: "right",
            },
          ].map((audience, i) => (
            <AudienceCard key={i} audience={audience} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AudienceCard({
  audience,
  index,
  isVisible,
}: {
  audience: { label: string; tag: string; points: string[]; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (audience.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/50">{audience.tag}</span>
      </div>
      <h3 className="mb-4 font-sans text-2xl font-light text-foreground md:text-3xl">{audience.label}</h3>
      <ul className="space-y-3">
        {audience.points.map((point, j) => (
          <li
            key={j}
            className="flex items-start gap-2 text-sm leading-relaxed text-foreground/70 md:text-base"
          >
            <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
