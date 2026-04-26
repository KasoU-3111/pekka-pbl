import Reveal from "./Reveal";

const stats = [
  { k: "Growing", v: "Community of thinkers" },
  { k: "2k+", v: "Followers and counting" },
  { k: "Daily", v: "Insights, zero noise" },
];

const SocialProof = () => {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <div className="rounded-3xl glass p-8 sm:p-12 text-center hairline">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">A quiet movement</p>
            <p className="mt-4 max-w-2xl mx-auto text-xl sm:text-2xl tracking-tight text-foreground/90">
              Read by founders, students, and operators who refuse to outsource their thinking.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              {stats.map((s) => (
                <div key={s.k} className="flex flex-col items-center">
                  <span className="font-serif-display text-3xl sm:text-4xl text-gradient-accent">
                    {s.k}
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground tracking-wide">
                    {s.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SocialProof;