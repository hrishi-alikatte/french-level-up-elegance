import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const WA_LINK = "https://chat.whatsapp.com/D9ABx0NiQpu4FvRcUB6hVr";

const WhatsAppPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("wa_dismissed");
    if (!dismissed) {
      const t = setTimeout(() => setShow(true), 4000);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("wa_dismissed", "1");
  };

  return (
    <>
      {/* Popup */}
      <AnimatePresence>
        {show && (
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 bg-card rounded-xl shadow-2xl border border-border/50 p-6 max-w-sm w-[calc(100%-2rem)]">
            <button onClick={dismiss} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"><X className="w-5 h-5" /></button>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-base uppercase tracking-wide text-foreground">Join Our WhatsApp Group</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Stay updated with batch announcements, study tips, and community support. Join our growing learner community!
            </p>
            <div className="flex gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-accent-foreground py-2.5 rounded-lg font-heading uppercase tracking-wide text-sm text-center hover:opacity-90 transition-opacity">
                Join Now
              </a>
              <button onClick={dismiss} className="flex-1 border border-border py-2.5 rounded-lg font-heading uppercase tracking-wide text-sm text-muted-foreground hover:text-foreground transition-colors">
                Maybe Later
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-4 sm:right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform animate-float">
        <MessageCircle className="w-6 h-6 text-accent-foreground" />
      </a>
    </>
  );
};

export default WhatsAppPopup;
