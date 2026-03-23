import { motion } from "framer-motion";
import { BookOpen, MessageCircle, Globe, CalendarDays } from "lucide-react";
import TricolorBar from "./TricolorBar";

const features = [
  { icon: BookOpen, title: "Structured Syllabus", desc: "CEFR-aligned curriculum covering grammar, vocabulary, and communication skills at every level." },
  { icon: MessageCircle, title: "Communication Focus", desc: "Learn to speak with confidence through real-life conversations, role-plays, and interactive exercises." },
  { icon: CalendarDays, title: "Flexible Batches", desc: "Choose regular weekday or weekend batches to fit your schedule. Fully online classes." },
  { icon: Globe, title: "Global Access", desc: "Multiple payment currencies (Euro & INR) for learners worldwide. Study from anywhere." },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary/50">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-primary font-bold mb-4">Why Choose Us</h2>
        <TricolorBar className="max-w-32 mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-foreground/70 leading-relaxed">
          At Level Up French Classes, we build your language skills systematically—from foundational grammar to confident conversation—ensuring every learner progresses with clarity and support.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg uppercase tracking-wide text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
