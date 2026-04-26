import { ArrowRight, Instagram } from "lucide-react";
import Reveal from "./Reveal";

const INSTAGRAM_URL = "https://www.instagram.com/firstprinciples.hq";

const FinalCTA = () => {
  return (
    <section className="relative py-32 sm:py-44 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[760px] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--violet)/0.30),transparent_70%)] blur-3xl pointer-events-none" aria-hidden />

      <div className="container relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[1.02]">
              <span className="font-semibold text-gradient">Stop consuming.</span>
              <br />
              <span className="font-serif-display italic text-gradient-accent">Start understanding.</span>
            </h2>

            <p className="mt-8 mx-auto max-w-lg text-base sm:text-lg text-muted-foreground">
              One feed. Built for thinkers, not scrollers.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative inline-flex items-center gap-3 rounded-full px-7 py-4 text-base font-medium glow-hover bg-foreground text-background animate-pulse-glow"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(var(--violet))] to-[hsl(var(--azure))] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Instagram className="relative h-5 w-5" />
                <span className="relative">Follow Now</span>
                <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-8 text-xs text-muted-foreground/70 tracking-wide">
              @firstprinciples.hq · Instagram
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;