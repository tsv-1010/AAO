"use client"

import { useReveal } from "@/hooks/use-reveal"

const pillars = [
  {
    number: "01",
    title: "Media & Distribution",
    subtitle: "Content Engine",
    description:
      "Professional production for podcasts, docuseries, and digital content — told authentically, owned entirely by the talent. Your story, your channel, your audience.",
    direction: "left",
  },
  {
    number: "02",
    title: "Marketplace & Monetization",
    subtitle: "Deal Flow",
    description:
      "A sovereign marketplace where talent claims brand deals and fans support directly. Smart-contract sponsorships with instant payments, clear deliverables, and zero middlemen.",
    direction: "right",
  },
  {
    number: "03",
    title: "Treasury & Asset Management",
    subtitle: "Automated Wealth",
    description:
      "An automated back office that converts active income into passive wealth. Royalty splits, vesting schedules, and yield-bearing reinvestment — all running on code, not trust.",
    direction: "left",
  },
  {
    number: "04",
    title: "Ventures & IP Incubation",
    subtitle: "Build & Launch",
    description:
      "A laboratory for high-margin ventures — digital products, SaaS, AI tools, collectibles, and physical merch. We capture the full value of your intellectual property.",
    direction: "right",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            The Ecosystem
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / A vertically integrated operating system for sovereign talent
          </p>
        </div>

        <div className="space-y-5 md:space-y-7">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarCard({
  pillar,
  index,
  isVisible,
}: {
  pillar: { number: string; title: string; subtitle: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return pillar.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex flex-col gap-1 border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/25 md:flex-row md:items-center md:justify-between md:gap-8 md:py-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "90%" : "95%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {pillar.number}
        </span>
        <div>
          <h3 className="mb-0.5 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
            {pillar.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{pillar.subtitle}</p>
        </div>
      </div>
      <p className="mt-1 max-w-md pl-10 text-xs leading-relaxed text-foreground/60 transition-colors group-hover:text-foreground/80 md:mt-0 md:pl-0 md:text-sm">
        {pillar.description}
      </p>
    </div>
  )
}
