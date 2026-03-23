import TricolorBar from "./TricolorBar";
import { Phone, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-french-navy text-french-cream/80">
    <TricolorBar />
    <div className="section-container py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-heading text-lg uppercase tracking-wide text-french-cream mb-3">Level Up French</h4>
          <p className="text-sm leading-relaxed">Premium online French classes for A1, A2, and B1 levels. Structured learning, flexible batches, global access.</p>
        </div>
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest text-french-cream mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#courses" className="hover:text-french-cream transition-colors">Courses</a></li>
            <li><a href="#batches" className="hover:text-french-cream transition-colors">Batches</a></li>
            <li><a href="#enroll" className="hover:text-french-cream transition-colors">Enrollment</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest text-french-cream mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9392094201</li>
            <li>
              <a href="https://chat.whatsapp.com/D9ABx0NiQpu4FvRcUB6hVr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-french-cream transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Group
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest text-french-cream mb-3">Levels</h4>
          <div className="flex gap-2">
            {["A1", "A2", "B1"].map((l) => (
              <span key={l} className="bg-french-cream/10 px-3 py-1 rounded-full text-xs font-heading uppercase tracking-wide">{l}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-french-cream/10 mt-10 pt-6 text-center text-xs text-french-cream/50">
        © {new Date().getFullYear()} Level Up French Classes. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
