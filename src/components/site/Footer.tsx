import { Instagram, Youtube } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/firstprinciples.hq";
const YOUTUBE_URL = "https://www.youtube.com/@thefirstprinciplespodcast";
const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[hsl(var(--violet))] to-[hsl(var(--azure))]">
            <span className="text-[9px] font-bold text-background">FP</span>
          </span>
          <span className="text-foreground/80">FirstPrinciples HQ</span>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <Instagram className="h-4 w-4" />
          @firstprinciples.hq
        </a>
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <Youtube className="h-4 w-4" />
          @firstprinciples.hq
        </a>

        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} — Think clearly.
        </p>
      </div>
    </footer>
  );
};

export default Footer;