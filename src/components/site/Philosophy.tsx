import Reveal from "./Reveal";

const Philosophy = () => {
  return (
    <section id="philosophy" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">01 — Philosophy</p>
            <h2 className="mt-5 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              <span className="font-semibold text-gradient">What is</span>{" "}
              <span className="font-serif-display italic text-gradient-accent">first principles</span>{" "}
              <span className="font-semibold text-gradient">thinking?</span>
            </h2>
          </Reveal>

          <div className="lg:col-span-7 space-y-6 text-[17px] leading-relaxed text-muted-foreground">
            <Reveal delay={0.05}>
              <p>
                It&apos;s the discipline of breaking a problem down to its
                <span className="text-foreground"> irreducible truths</span> — the parts you actually know — and
                building back up from there. No borrowed conclusions. No inherited assumptions.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Most people reason by analogy: copying what worked before. First principles thinkers
                <span className="text-foreground"> reason from physics</span> — the underlying mechanics — and arrive at
                answers others can&apos;t see.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p>
                The reward isn&apos;t a louder opinion. It&apos;s
                <span className="text-foreground"> quieter clarity</span>: the kind that compounds in every decision
                you make for the rest of your life.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { k: "Break", v: "assumptions" },
                  { k: "Think", v: "from fundamentals" },
                  { k: "Choose", v: "clarity over opinion" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl glass p-5 glow-hover"
                  >
                    <p className="font-serif-display text-2xl text-gradient-accent">{item.k}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;