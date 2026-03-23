import { useState } from "react";
import { Menu, X } from "lucide-react";
import TricolorBar from "./TricolorBar";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Batches", href: "#batches" },
  { label: "Payment", href: "#payment" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Enroll", href: "#enroll" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <TricolorBar />
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="font-heading text-xl uppercase tracking-wider text-primary font-bold">Level Up</span>
          <span className="font-display text-sm italic text-french-red">French</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wide font-heading">
              {l.label}
            </a>
          ))}
          <a href="#enroll" className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-heading uppercase tracking-wide hover:opacity-90 transition-opacity">
            Enroll Now
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-heading uppercase tracking-wide text-foreground/70 hover:text-primary border-b border-border/50">
              {l.label}
            </a>
          ))}
          <a href="#enroll" onClick={() => setOpen(false)} className="mt-3 block text-center bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-heading uppercase tracking-wide">
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
