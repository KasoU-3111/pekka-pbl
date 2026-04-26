import { ArrowUpRight, Instagram } from "lucide-react";
import Reveal from "./Reveal";

const INSTAGRAM_URL = "https://www.instagram.com/firstprinciples.hq";

const ideas = [
  {
    tag: "Mental Models",
    quote: "Most people optimize outcomes. Few optimize thinking.",
    note: "The leverage isn't in the answer — it's in the framework.",
    accent: "from-[hsl(var(--violet))] to-[hsl(var(--azure))]",
  },
  {
    tag: "Clarity",
    quote: "Confusion is a signal, not a failure.",
    note: "It tells you exactly where the next layer of understanding lives.",
    accent: "from-[hsl(var(--azure))] to-[hsl(var(--indigo))]",
  },
  {
    tag: "Decisions",
    quote: "If you can't explain it simply, you've borrowed the conclusion.",
    note: "First principles forces you to own every step of your reasoning.",
    accent: "from-[hsl(var(--indigo))] to-[hsl(var(--violet))]",
  },
  {
    tag: "Self-mastery",
    quote: "Discipline is just identity playing the long game.",
    note: "You don't rise to your goals. You fall to your defaults.",
    accent: "from-[hsl(var(--violet))] to-[hsl(var(--indigo))]",
  },
  {
    tag: "Bias",
    quote: "You don't see the world as it is. You see it as you are.",
    note: "Naming a bias is the first step to no longer being run by it.",
    accent: "from-[hsl(var(--azure))] to-[hsl(var(--violet))]",
  },
  {
    tag: "Focus",
    quote: "Attention is the rarest currency. Spend it like it compounds.",
    note: "Because it does — in both directions.",
    accent: "from-[hsl(var(--indigo))] to-[hsl(var(--azure))]",
  },
];

const IdeasShowcase = () => {
  return (
    <section id="ideas" className="relative py-28 sm:py-36">
      <div className="container">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">02 — Ideas</p>
              <h2 className="mt-5 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
                <span className="font-semibold text-gradient">A field guide to</span>{" "}
                <span className="font-serif-display italic text-gradient-accent">clearer thinking.</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Bite-sized lessons from the feed. Designed to interrupt autopilot and rebuild your defaults.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ideas.map((idea, i) => (
            <Reveal key={idea.quote} delay={i * 0.05}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative block h-full rounded-2xl glass p-6 sm:p-7 glow-hover overflow-hidden"
              >
                {/* corner glow */}
                <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${idea.accent} opacity-[0.12] blur-3xl group-hover:opacity-25 transition-opacity duration-700`} />

                <div className="flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {idea.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <p className="mt-10 text-xl sm:text-[22px] leading-snug font-medium text-foreground tracking-tight">
                  &ldquo;{idea.quote}&rdquo;
                </p>

                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                  {idea.note}
                </p>

                <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground/80">
                  <span className="h-px flex-1 bg-border" />
                  <span>@firstprinciples.hq</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium glow-hover"
            >
              <Instagram className="h-4 w-4" />
              View Full Content on Instagram
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default IdeasShowcase;