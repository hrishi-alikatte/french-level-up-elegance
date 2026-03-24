import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import TricolorBar from "./TricolorBar";

type Level = "A1" | "A2" | "B1";

const courses: Record<Level, { title: string; subtitle: string; color: string; price: string; prerequisites: string[]; outcomes: string[]; syllabus: string[] }> = {
  A1: {
    title: "A1", subtitle: "Beginner",
    color: "bg-french-blue",
    price: "₹12,000 / €120",
    prerequisites: [
      "No prior knowledge of French is required",
      "Suitable for complete beginners",
    ],
    outcomes: [
      "Introduce themselves and others",
      "Ask and answer simple personal questions",
      "Engage in basic conversations in everyday contexts",
      "Understand and use familiar expressions and simple sentences",
      "Read and write short, simple texts",
      "Grasp fundamental French grammar and vocabulary",
    ],
    syllabus: [
      "Personal information, greetings & farewells",
      "Family, relationships, body parts & professions",
      "School and classroom vocabulary",
      "Food, drinks, places & directions",
      "Clothes, colors, house & home vocabulary",
      "Grammar: articles, present tense, negation, plurals, adjective agreement, question forms, prepositions, demonstratives, possessives",
    ],
  },
  A2: {
    title: "A2", subtitle: "Elementary",
    color: "bg-french-gold",
    price: "₹15,000 / €140",
    prerequisites: [
      "Completion of A1 Level",
      "Basic understanding of French vocabulary and sentence structures",
    ],
    outcomes: [
      "Communicate more confidently in everyday situations",
      "Understand expressions related to shopping, travel, and work",
      "Talk about past experiences, future plans, and give opinions",
      "Manage simple interactions in French-speaking environments",
      "Understand and form more complex sentence structures",
    ],
    syllabus: [
      "Grammar: reflexive verbs, modal verbs, passé composé, imparfait, futur simple, imperative, direct/indirect objects, relative pronouns",
      "Vocabulary: travel, hobbies, daily routine, housing, weather, money, social events",
      "Communication: invitations, instructions, describing past habits, making reservations, expressing feelings, giving opinions",
    ],
  },
  B1: {
    title: "B1", subtitle: "Intermediate",
    color: "bg-french-red",
    price: "₹25,000 / €230",
    prerequisites: [
      "Completion of A2 Level",
      "Ability to communicate in basic everyday situations",
      "Understanding of common tenses: present, past, future",
    ],
    outcomes: [
      "Communicate independently in most daily situations",
      "Express opinions, arguments, and explanations",
      "Describe experiences, dreams, and ambitions",
      "Handle travel, work, and social interactions confidently",
      "Write simple connected texts such as emails, essays, and messages",
    ],
    syllabus: [
      "Grammar: plus-que-parfait, conditional present, subjunctive intro, reported speech, passive voice, gerund, advanced connectors",
      "Vocabulary: work, education, travel, health, media, environment, culture, emotions, relationships",
      "Communication: expressing opinions with reasons, agreeing/disagreeing politely, giving advice, formal/informal emails, short discussions and debates",
    ],
  },
};

const levelKeys: Level[] = ["A1", "A2", "B1"];

const CourseCard = ({ level }: { level: Level }) => {
  const c = courses[level];
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`${c.color} h-2`} />
      <div className="p-6 sm:p-8">
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-baseline gap-3">
            <span className="font-heading text-4xl font-bold text-primary">{c.title}</span>
            <span className="font-display italic text-lg text-muted-foreground">{c.subtitle}</span>
          </div>
          <div className="text-right">
            <span className="block font-heading text-sm font-bold text-primary">{c.price}</span>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="font-heading text-sm uppercase tracking-widest text-muted-foreground mb-2">Prerequisites</h4>
          <ul className="space-y-1.5">
            {c.prerequisites.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />{p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h4 className="font-heading text-sm uppercase tracking-widest text-muted-foreground mb-2">Learning Outcomes</h4>
          <ul className="space-y-1.5">
            {c.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-french-gold mt-0.5 shrink-0" />{o}
              </li>
            ))}
          </ul>
        </div>

        <button onClick={() => setExpanded(!expanded)} className="mt-5 flex items-center gap-1 text-primary font-heading text-sm uppercase tracking-wide hover:opacity-80 transition-opacity">
          {expanded ? "Hide" : "View"} Syllabus {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <ul className="mt-3 space-y-1.5">
                {c.syllabus.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-french-red mt-2 shrink-0" />{s}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <a href="#enroll" className="mt-6 block text-center bg-primary text-primary-foreground py-2.5 rounded-lg font-heading uppercase tracking-wide text-sm hover:opacity-90 transition-opacity">
          Enroll in {c.title}
        </a>
      </div>
    </motion.div>
  );
};

const CoursesSection = () => (
  <section id="courses" className="py-20">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-primary font-bold mb-4">Our Courses</h2>
        <TricolorBar className="max-w-32 mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-foreground/70 leading-relaxed">
          Three progressive CEFR levels designed to take you from your first "Bonjour" to confident French communication.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {levelKeys.map((l) => <CourseCard key={l} level={l} />)}
      </div>
    </div>
  </section>
);

export default CoursesSection;
