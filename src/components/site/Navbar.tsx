import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/firstprinciples.hq";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[var(--shadow-elegant)]" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[hsl(var(--violet))] to-[hsl(var(--azure))]">
              <span className="absolute inset-0 rounded-md blur-md bg-gradient-to-br from-[hsl(var(--violet))] to-[hsl(var(--azure))] opacity-50 group-hover:opacity-80 transition-opacity" />
              <span className="relative text-[10px] font-bold tracking-tight text-background">FP</span>
            </span>
            <span className="text-sm font-medium tracking-tight">
              FirstPrinciples<span className="text-muted-foreground"> · HQ</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#philosophy" className="hover:text-foreground transition-colors">Philosophy</a>
            <a href="#ideas" className="hover:text-foreground transition-colors">Ideas</a>
            <a href="#topics" className="hover:text-foreground transition-colors">Topics</a>
            <a href="#why" className="hover:text-foreground transition-colors">Why</a>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-3 pr-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-all"
          >
            <Instagram className="h-4 w-4" />
            <span>Follow</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;