import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import TricolorBar from "./TricolorBar";

const testimonials = [
  { name: "Priya S.", level: "A1 Graduate", text: "Level Up made learning French so approachable. The structured curriculum and supportive teaching helped me build confidence from the very first class." },
  { name: "Markus W.", level: "A2 Graduate", text: "I joined the weekend batch from Germany and the flexibility was perfect. The grammar drills and conversation practice truly elevated my skills." },
  { name: "Ananya R.", level: "B1 Graduate", text: "Going from basic greetings to writing emails in French felt incredible. The progressive approach and dedicated instructors are unmatched." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-primary font-bold mb-4">What Our Learners Say</h2>
        <TricolorBar className="max-w-32 mx-auto mb-6" />
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow relative">
            <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-french-gold text-french-gold" />)}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
            <div>
              <p className="font-heading text-sm uppercase tracking-wide text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.level}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mt-16 text-center bg-primary rounded-xl p-10 sm:p-14 shadow-lg">
        <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wide text-primary-foreground mb-3">Ready to Begin Your French Journey?</h3>
        <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Join hundreds of learners who have leveled up their French skills. Enroll today and start speaking with confidence.</p>
        <a href="#enroll" className="inline-block bg-card text-primary px-8 py-3 rounded-lg font-heading uppercase tracking-wide hover:opacity-90 transition-opacity shadow-md">
          Enroll Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
