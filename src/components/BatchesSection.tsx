import { motion } from "framer-motion";
import { Clock, CalendarDays } from "lucide-react";
import TricolorBar from "./TricolorBar";

const batches = [
  {
    icon: CalendarDays,
    title: "Regular Batch",
    desc: "Weekday classes with consistent scheduling for steady progress. Ideal for students and professionals who prefer structured daily learning.",
    highlight: "Mon – Fri sessions",
    timings: [
      { level: "B1", time: "5:30PM – 6:30PM CET" },
      { level: "A2", time: "7:00PM – 8:00PM CET" },
      { level: "A1", time: "8:30PM – 9:30PM CET" }
    ]
  },
  {
    icon: Clock,
    title: "Weekend Batch",
    desc: "Saturday & Sunday intensive sessions for working professionals and busy learners who need flexibility without compromising quality.",
    highlight: "Sat – Sun sessions",
    timings: [
      { level: "A1", time: "11:00AM – 1:00PM CET" },
      { level: "A2", time: "2:00PM – 4:00PM CET" },
      { level: "B1", time: "5:00PM – 7:00PM CET" }
    ]
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
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {batches.map((b, i) => (
          <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 shadow-sm border border-border/50 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl uppercase tracking-wide text-foreground mb-2">{b.title}</h3>
            <span className="inline-block bg-french-blue/10 text-french-blue text-xs font-heading uppercase tracking-widest px-3 py-1 rounded-full mb-4">{b.highlight}</span>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{b.desc}</p>
            
            <div className="space-y-3 pt-4 border-t border-border/50">
              <h4 className="font-heading text-xs uppercase tracking-widest text-muted-foreground">Class Timings</h4>
              {b.timings.map((t) => (
                <div key={t.level} className="flex justify-between items-center text-sm px-2">
                  <span className="font-bold text-primary">{t.level}</span>
                  <span className="text-foreground/80">{t.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BatchesSection;
