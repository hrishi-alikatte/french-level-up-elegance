import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16" id="hero">
    <div className="absolute inset-0">
      <img src={heroBg} alt="French learning" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>
    <div className="section-container relative z-10 text-center py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-3 h-3 rounded-full bg-french-blue" />
          <span className="w-3 h-3 rounded-full bg-card border border-border" />
          <span className="w-3 h-3 rounded-full bg-french-red" />
        </div>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-primary font-bold leading-none mb-4">
          Level Up<br />
          <span className="font-display italic text-french-red normal-case text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">French Classes</span>
        </h1>
        <p className="font-heading text-lg sm:text-xl uppercase tracking-widest text-muted-foreground mb-8">
          Online French Classes — A1 · A2 · B1
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-foreground/70 mb-10 leading-relaxed">
          Master French through structured, communication-focused learning. Progress from beginner to intermediate with our expertly crafted curriculum, flexible scheduling, and personalized guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#enroll" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-heading uppercase tracking-wide text-base hover:opacity-90 transition-opacity shadow-lg">
            Enroll Now
          </a>
          <a href="#courses" className="border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-heading uppercase tracking-wide text-base hover:bg-primary hover:text-primary-foreground transition-colors">
            Explore Courses
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
