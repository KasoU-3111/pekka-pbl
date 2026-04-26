import { Brain, Compass, GitBranch, Layers, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const topics = [
  {
    icon: Layers,
    title: "Mental Models",
    desc: "Reusable lenses for thinking through any problem — from inversion to second-order effects.",
  },
  {
    icon: GitBranch,
    title: "Decision Making",
    desc: "How to choose under uncertainty without outsourcing your judgement to noise.",
  },
  {
    icon: Compass,
    title: "Productivity Systems",
    desc: "Frictionless systems that protect attention and compound the work that matters.",
  },
  {
    icon: Brain,
    title: "Cognitive Biases",
    desc: "Spot the invisible errors quietly steering your reasoning every single day.",
  },
  {
    icon: Sparkles,
    title: "Self-Improvement",
    desc: "Identity, defaults, and habits — the architecture beneath everything you do.",
  },
];

const Topics = () => {
  return (
    <section id="topics" className="relative py-28 sm:py-36">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">03 — Topics</p>
            <h2 className="mt-5 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              <span className="font-semibold text-gradient">What we</span>{" "}
              <span className="font-serif-display italic text-gradient-accent">break down.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className="group relative h-full rounded-2xl glass p-6 glow-hover">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--violet)/0.15)] to-[hsl(var(--azure)/0.15)] hairline">
                      <Icon className="h-4 w-4 text-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-medium tracking-tight">{t.title}</h3>
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}

          {/* Companion tile */}
          <Reveal delay={topics.length * 0.05}>
            <div className="group relative h-full overflow-hidden rounded-2xl p-6 hairline bg-gradient-to-br from-[hsl(var(--violet)/0.18)] via-[hsl(var(--azure)/0.10)] to-transparent">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative">
                <p className="font-serif-display text-2xl text-gradient italic">
                  &ldquo;Think slow. Act fast.&rdquo;
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Every topic ladders up to one outcome — moving through the world with calm precision.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Topics;