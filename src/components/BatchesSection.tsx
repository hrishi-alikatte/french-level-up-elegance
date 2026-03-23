import { motion } from "framer-motion";
import { Clock, CalendarDays } from "lucide-react";
import TricolorBar from "./TricolorBar";

const batches = [
  {
    icon: CalendarDays,
    title: "Regular Batch",
    desc: "Weekday classes with consistent scheduling for steady progress. Ideal for students and professionals who prefer structured daily learning.",
    highlight: "Mon – Fri sessions",
  },
  {
    icon: Clock,
    title: "Weekend Batch",
    desc: "Saturday & Sunday intensive sessions for working professionals and busy learners who need flexibility without compromising quality.",
    highlight: "Sat – Sun sessions",
  },
];

const BatchesSection = () => (
  <section id="batches" className="py-20 bg-secondary/50">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-primary font-bold mb-4">Batch Options</h2>
        <TricolorBar className="max-w-32 mx-auto mb-6" />
        <p className="max-w-xl mx-auto text-foreground/70 leading-relaxed">
          Choose the schedule that fits your life. Both batches are fully online with live instruction.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {batches.map((b, i) => (
          <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 shadow-sm border border-border/50 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl uppercase tracking-wide text-foreground mb-2">{b.title}</h3>
            <span className="inline-block bg-french-blue/10 text-french-blue text-xs font-heading uppercase tracking-widest px-3 py-1 rounded-full mb-4">{b.highlight}</span>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BatchesSection;
