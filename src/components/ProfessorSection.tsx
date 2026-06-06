import { motion } from "framer-motion";
import { GraduationCap, Briefcase, HeartHandshake, MapPin, Award } from "lucide-react";
import TricolorBar from "./TricolorBar";

const ProfessorSection = () => {
  const focusAreas = [
    {
      icon: GraduationCap,
      title: "Exam Excellence",
      desc: "Targeted training for DELF & DALF exams. Learn to think like an examiner, understand grading criteria, and master expectations at all levels from beginner (A1/A2) to advanced (B1/B2/C1/C2).",
    },
    {
      icon: Briefcase,
      title: "Workplace Integration",
      desc: "Bridge the gap between paper levels and active professional life. Alternate between exam prep and real-world scenarios like emails, seminars, and client meetings.",
    },
    {
      icon: HeartHandshake,
      title: "Psychological Safety",
      desc: "Humane, compassionate support designed for learners facing anxiety or plateaus. Break complex milestones down into structured, manageable steps.",
    },
  ];

  return (
    <section id="professor" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-french-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Framed Photo & Quick Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl shadow-xl">
              {/* French Brand Color Borders Behind Image */}
              <div className="absolute inset-0 border border-french-blue/30 rounded-2xl translate-x-2 translate-y-2 pointer-events-none" />
              <div className="absolute inset-0 border border-french-gold/40 rounded-2xl -translate-x-2 -translate-y-2 pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="w-full h-full rounded-2xl overflow-hidden border border-border bg-card">
                <img 
                  src="/dipikaa.png" 
                  alt="Professor Dipikaa" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Accent Badge 1: Location */}
              <div className="absolute -bottom-4 -left-4 bg-card px-4 py-2 rounded-xl shadow-md border border-border/80 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-french-red" />
                <span className="text-xs font-heading uppercase tracking-wide text-foreground">Lyon, France</span>
              </div>

              {/* Floating Accent Badge 2: Credentials */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
                <Award className="w-4 h-4 text-french-gold" />
                <span className="text-xs font-heading uppercase tracking-wider">DELF/DALF Expert</span>
              </div>
            </div>
            
            {/* Quick credentials card */}
            <div className="mt-8 bg-card rounded-xl p-5 border border-border/50 shadow-sm w-full max-w-[360px]">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Focus Levels</span>
                  <span className="font-heading uppercase tracking-wide text-primary font-semibold">A1 – C2 (All Levels)</span>
                </div>
                <div className="border-t border-border/50" />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Teaching Philosophy</span>
                  <span className="font-heading uppercase tracking-wide text-french-gold font-semibold">Confidence First</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Pedagogy details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="mb-4">
              <span className="font-heading text-xs uppercase tracking-widest text-french-gold font-bold bg-french-gold/10 px-3 py-1 rounded-full">
                Meet Your Instructor
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-primary font-bold mb-3">
              Professor Dipikaa
            </h2>
            <TricolorBar className="max-w-28 mb-6" />

            {/* Powerful display quote */}
            <blockquote className="border-l-4 border-french-gold pl-4 my-6 italic text-foreground/90 font-display text-lg sm:text-xl leading-relaxed">
              "Tutoring is less about correcting mistakes and more about giving you back access to your own intelligence, humour, and ambition in French."
            </blockquote>

            {/* Distilled Narrative Copy */}
            <div className="space-y-4 text-foreground/80 text-base leading-relaxed">
              <p>
                As a multilingual professional living in Lyon, Dipikaa understands first‑hand what it means to rebuild a life and career in France. Having navigated her own path from classroom learning to high‑stakes exams and professional workplaces, she specializes in bridging the gap between "having a level on paper" and feeling confident in real‑life communication.
              </p>
              <p>
                She works closely with motivated students and international professionals, helping them master the exact skills tested in official CEFR exams while ensuring they can confidently participate in university seminars, lead client meetings, and navigate French administrative environments.
              </p>
            </div>

            {/* Focus areas grid */}
            <div className="mt-8 space-y-4">
              <h3 className="font-heading text-lg uppercase tracking-wider text-primary font-semibold mb-3">
                Methodology & Approach
              </h3>
              <div className="grid gap-4">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-card border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <area.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm uppercase tracking-wide text-foreground mb-1">{area.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProfessorSection;
