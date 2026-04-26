import { ArrowRight, Instagram, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const INSTAGRAM_URL = "https://www.instagram.com/firstprinciples.hq";

const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-28 sm:pt-44 sm:pb-36 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div className="absolute inset-0 aurora pointer-events-none" aria-hidden />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[760px] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--violet)/0.35),transparent_70%)] blur-3xl pointer-events-none" aria-hidden />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--violet))] opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--violet))]" />
            </span>
            <Sparkles className="h-3 w-3" />
            <span>Clarity over noise</span>
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
            <span className="font-serif-display italic text-gradient">Understand</span>{" "}
            <span className="font-semibold text-gradient">the world</span>
            <br />
            <span className="font-semibold text-gradient">from</span>{" "}
            <span className="font-serif-display italic text-gradient-accent">first principles.</span>
          </h1>

          <p className="mt-7 mx-auto max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Break down complex ideas. Think clearly. Make better decisions.
            A modern field guide to the mental models shaping the world.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium glow-hover"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(var(--violet))] to-[hsl(var(--azure))] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Instagram className="relative h-4 w-4 group-hover:text-background" />
              <span className="relative group-hover:text-background">Follow on Instagram</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:text-background" />
            </a>
            <a
              href="#ideas"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-foreground/90 hover:text-foreground glow-hover"
            >
              Explore Ideas
              <ArrowRight className="h-4 w-4 opacity-60" />
            </a>
          </div>

          <div className="mt-14 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            <span>Mental Models</span>
            <span className="h-px w-8 bg-border" />
            <span>Clarity</span>
            <span className="h-px w-8 bg-border" />
            <span>Decisions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;