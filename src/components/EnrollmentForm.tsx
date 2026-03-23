import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import TricolorBar from "./TricolorBar";

const EnrollmentForm = () => {
  const [form, setForm] = useState({ name: "", country: "", phone: "", level: "", batch: "", payment: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.country.trim()) e.country = "Country is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.level) e.level = "Please select a level";
    if (!form.batch) e.batch = "Please select a batch";
    if (!form.payment) e.payment = "Please select payment mode";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "506fe426-46d1-46bf-8fa1-1fc594ce4263",
          name: form.name,
          country: form.country,
          phone: form.phone,
          level: form.level,
          batch: form.batch,
          payment: form.payment,
          subject: `New French Course Enrollment: ${form.name}`,
          from_name: "Level Up French Classes",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        toast.success("Enrollment request sent successfully!");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm font-body bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition ${errors[field] ? "border-french-red" : "border-border"}`;

  const selectClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm font-body bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition appearance-none ${errors[field] ? "border-french-red" : "border-border"}`;

  if (submitted) {
    return (
      <section id="enroll" className="py-20 bg-secondary/50">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto text-center bg-card rounded-xl p-10 shadow-md border border-border/50">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl uppercase tracking-wide text-primary mb-2">Enrollment Received!</h3>
            <p className="text-foreground/70 mb-6">Thank you, {form.name}! We've received your enrollment for <strong>{form.level}</strong> ({form.batch} Batch). We'll contact you shortly at {form.phone}.</p>
            <a href="https://chat.whatsapp.com/D9ABx0NiQpu4FvRcUB6hVr" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-accent-foreground px-6 py-2.5 rounded-lg font-heading uppercase tracking-wide text-sm hover:opacity-90 transition-opacity">
              Join WhatsApp Group
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="enroll" className="py-20 bg-secondary/50">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-primary font-bold mb-4">Enroll Now</h2>
          <TricolorBar className="max-w-32 mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-foreground/70">Begin your French journey today. Fill in the form below and we'll get you started.</p>
        </motion.div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-card rounded-xl p-8 shadow-md border border-border/50 space-y-5">
          <div>
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-1.5">Full Name</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className={inputClass("name")} />
            {errors.name && <p className="text-xs text-french-red mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-1.5">Country</label>
            <input type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="Your country" className={inputClass("country")} />
            {errors.country && <p className="text-xs text-french-red mt-1">{errors.country}</p>}
          </div>
          <div>
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-1.5">Phone Number</label>
            <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="" className={inputClass("phone")} />
            {errors.phone && <p className="text-xs text-french-red mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-1.5">Level</label>
            <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })} className={selectClass("level")}>
              <option value="">Select Level</option>
              <option value="A1">A1 – Beginner</option>
              <option value="A2">A2 – Elementary</option>
              <option value="B1">B1 – Intermediate</option>
            </select>
            {errors.level && <p className="text-xs text-french-red mt-1">{errors.level}</p>}
          </div>
          <div>
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-1.5">Batch</label>
            <select value={form.batch} onChange={(e) => setForm({ ...form, batch: e.target.value })} className={selectClass("batch")}>
              <option value="">Select Batch</option>
              <option value="Regular">Regular Batch (Mon–Fri)</option>
              <option value="Weekend">Weekend Batch (Sat–Sun)</option>
            </select>
            {errors.batch && <p className="text-xs text-french-red mt-1">{errors.batch}</p>}
          </div>
          <div>
            <label className="block text-xs font-heading uppercase tracking-widest text-muted-foreground mb-1.5">Payment Mode</label>
            <select value={form.payment} onChange={(e) => setForm({ ...form, payment: e.target.value })} className={selectClass("payment")}>
              <option value="">Select Currency</option>
              <option value="EUR">Euro (€)</option>
              <option value="INR">INR (₹)</option>
            </select>
            {errors.payment && <p className="text-xs text-french-red mt-1">{errors.payment}</p>}
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-heading uppercase tracking-wide text-base hover:opacity-90 transition-opacity shadow-md disabled:opacity-70 disabled:cursor-not-allowed">
            {isSubmitting ? "Sending..." : "Submit Enrollment"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnrollmentForm;
// Updated git identity
