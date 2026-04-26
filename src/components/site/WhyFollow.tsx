import Reveal from "./Reveal";

const points = [
  {
    n: "01",
    title: "Learn how to think — not what to think.",
    desc: "Frameworks over conclusions. Tools over takes.",
  },
  {
    n: "02",
    title: "Break down complex problems into simple truths.",
    desc: "If it sounds complicated, it isn't finished yet.",
  },
  {
    n: "03",
    title: "Build clarity in decisions, work, and life.",
    desc: "Quieter mind. Sharper choices. Compounding edge.",
  },
];

const WhyFollow = () => {
  return (
    <section id="why" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">04 — Why follow</p>
            <h2 className="mt-5 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              <span className="font-semibold text-gradient">Three reasons.</span>
              <br />
              <span className="font-serif-display italic text-gradient-accent">No fluff.</span>
            </h2>
          </Reveal>

          <div className="lg:col-span-8 divide-y divide-border">
            {points.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.07}>
                <div className="group flex items-start gap-6 sm:gap-10 py-7 sm:py-9">
                  <span className="font-serif-display text-2xl text-muted-foreground/60 group-hover:text-gradient-accent transition-colors min-w-[2.5rem]">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-[28px] tracking-tight font-medium leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground max-w-md">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFollow;