import { motion } from "framer-motion";
import { CalendarDays, Clock, Zap } from "lucide-react";
import TricolorBar from "./TricolorBar";

type Batch = {
  type: string;
  icon: React.ComponentType<{ className?: string }>;
  schedule: string;
  timings: string;
  duration: string;
  startDate: string;
  endDate: string;
  fee: string;
};

type LevelGroup = {
  level: string;
  subtitle: string;
  color: string;
  batches: Batch[];
};

const levels: LevelGroup[] = [
  {
    level: "A1",
    subtitle: "Beginner",
    color: "bg-french-blue",
    batches: [
      {
        type: "Extensive",
        icon: CalendarDays,
        schedule: "Mon – Fri",
        timings: "8:30 PM – 9:30 PM CET",
        duration: "1 hr / session",
        startDate: "Jun 15",
        endDate: "Aug 14",
        fee: "€110 / ₹12,000",
      },
      {
        type: "Weekends",
        icon: Clock,
        schedule: "Sat & Sun",
        timings: "10:00 AM – 12:00 PM CET",
        duration: "2 hrs / session",
        startDate: "Jun 20",
        endDate: "Aug 16",
        fee: "€110 / ₹12,000",
      },
      {
        type: "Fast-Track",
        icon: Zap,
        schedule: "Mon, Wed & Fri",
        timings: "3:00 PM – 5:30 PM CET",
        duration: "2½ hrs / session (includes 15-min break)",
        startDate: "Jun 15",
        endDate: "Jul 17",
        fee: "€140 / ₹15,000",
      },
    ],
  },
  {
    level: "A2",
    subtitle: "Elementary",
    color: "bg-french-gold",
    batches: [
      {
        type: "Extensive",
        icon: CalendarDays,
        schedule: "Mon – Fri",
        timings: "7:00 PM – 8:00 PM CET",
        duration: "1 hr / session",
        startDate: "Jun 15",
        endDate: "Aug 28",
        fee: "€140 / ₹15,000",
      },
      {
        type: "Weekends",
        icon: Clock,
        schedule: "Sat & Sun",
        timings: "2:00 PM – 4:00 PM CET",
        duration: "2 hrs / session",
        startDate: "Jun 20",
        endDate: "Aug 30",
        fee: "€140 / ₹15,000",
      },
      {
        type: "Fast-Track",
        icon: Zap,
        schedule: "Mon, Wed & Fri",
        timings: "9:00 AM – 11:30 AM CET",
        duration: "2½ hrs / session (includes 15-min break)",
        startDate: "Jun 15",
        endDate: "Jul 24",
        fee: "€170 / ₹18,000",
      },
    ],
  },
  {
    level: "B1",
    subtitle: "Intermediate",
    color: "bg-french-red",
    batches: [
      {
        type: "Weekends",
        icon: Clock,
        schedule: "Sat & Sun",
        timings: "5:00 PM – 7:00 PM CET",
        duration: "2 hrs / session",
        startDate: "Jun 20",
        endDate: "Oct 18",
        fee: "€240 / ₹25,000",
      },
      {
        type: "Fast-Track",
        icon: Zap,
        schedule: "Tue & Thu",
        timings: "10:00 AM – 1:00 PM CET",
        duration: "3 hrs / session (includes 15-min break)",
        startDate: "Jun 16",
        endDate: "Jul 30",
        fee: "€280 / ₹30,000",
      },
    ],
  },
];

const BatchesSection = () => (
  <section id="batches" className="py-20 bg-secondary/50">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-primary font-bold mb-4">Batch Schedule</h2>
        <TricolorBar className="max-w-32 mx-auto mb-6" />
        <p className="max-w-xl mx-auto text-foreground/70 leading-relaxed">
          Choose the batch that fits your pace and schedule. All batches are fully online with live instruction.
        </p>
      </motion.div>

      {levels.map((lvl) => (
        <div key={lvl.level} className="mb-16 last:mb-0">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-baseline gap-3 mb-5">
            <span className="font-heading text-4xl font-bold text-primary">{lvl.level}</span>
            <span className="font-display italic text-lg text-muted-foreground">{lvl.subtitle}</span>
          </motion.div>

          <div className={`${lvl.color} h-1.5 rounded-t-xl`} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-card/30 rounded-b-xl p-6 border border-t-0 border-border/50">
            {lvl.batches.map((b, index) => (
              <motion.div
                key={b.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-heading text-sm font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-lg border border-primary/10">
                    {b.fee}
                  </span>
                </div>

                <h3 className="font-heading text-lg uppercase tracking-wide text-foreground mb-2">{b.type}</h3>

                <span className="inline-block bg-french-blue/10 text-french-blue text-xs font-heading uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                  {b.schedule}
                </span>

                <div className="space-y-2.5 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span>{b.timings}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <CalendarDays className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span>{b.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <CalendarDays className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span>{b.startDate} → {b.endDate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BatchesSection;
