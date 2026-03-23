import { motion } from "framer-motion";
import { Euro, IndianRupee } from "lucide-react";
import TricolorBar from "./TricolorBar";

const PaymentSection = () => (
  <section id="payment" className="py-20">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-primary font-bold mb-4">Payment Options</h2>
        <TricolorBar className="max-w-32 mx-auto mb-6" />
        <p className="max-w-xl mx-auto text-foreground/70 leading-relaxed">
          We offer flexible payment currencies for our international learners.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {[
          { icon: Euro, label: "Euro (€)", desc: "For European and international learners", color: "text-french-blue", bg: "bg-french-blue/10" },
          { icon: IndianRupee, label: "INR (₹)", desc: "For learners based in India", color: "text-french-red", bg: "bg-french-red/10" },
        ].map((p, i) => (
          <motion.div key={p.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 shadow-sm border border-border/50 text-center hover:shadow-md transition-shadow">
            <div className={`w-16 h-16 rounded-full ${p.bg} flex items-center justify-center mx-auto mb-4`}>
              <p.icon className={`w-7 h-7 ${p.color}`} />
            </div>
            <h3 className="font-heading text-xl uppercase tracking-wide text-foreground mb-1">{p.label}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PaymentSection;
