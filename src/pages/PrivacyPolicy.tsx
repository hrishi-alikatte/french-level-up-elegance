import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TricolorBar from "@/components/TricolorBar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
        <TricolorBar />
        <div className="section-container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-xl uppercase tracking-wider text-primary font-bold">Level Up</span>
            <span className="font-display text-sm italic text-french-red">French</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm font-heading uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-primary font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm font-display italic text-muted-foreground">Last updated: June 2026</p>
          </div>

          <div className="text-foreground/80 leading-relaxed space-y-6 font-body text-sm sm:text-base">
            <p>
              At <strong>Level Up French Classes</strong>, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you enroll in our French language courses.
            </p>

            <hr className="border-border my-6" />

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-primary uppercase tracking-wide">1. Information We Collect</h2>
              <p>When you submit an enrollment request or communicate with us, we collect the following personal information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Identification Details:</strong> First Name and Family Name.</li>
                <li><strong>Contact Information:</strong> Email Address and Phone Number (specifically for WhatsApp communications).</li>
                <li><strong>Geographic Information:</strong> Country of residence.</li>
                <li><strong>Course Preferences:</strong> Preferred French level (A1, A2, B1), batch type choice (Extensive, Weekends, Fast-Track), and preferred currency/payment mode (EUR or INR).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-primary uppercase tracking-wide">2. How We Use Your Information</h2>
              <p>We use the collected information solely for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To process your enrollment request and verify batch availability.</li>
                <li>To contact you (via WhatsApp or email) to confirm registration, coordinate class schedules, and provide payment details.</li>
                <li>To send you updates regarding batch status, curriculum details, or course announcements.</li>
                <li>To facilitate your entry into our student WhatsApp learning groups.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-primary uppercase tracking-wide">3. Information Sharing and Third Parties</h2>
              <p>We do not sell, rent, or trade your personal data. To provide our services, we share data with the following trusted service providers:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Web3Forms:</strong> We use Web3Forms API to process and securely deliver form submissions from our website directly to our emails. We do not store your credentials or form entries on intermediate third-party database servers.</li>
                <li><strong>WhatsApp (Meta):</strong> We use the WhatsApp platform to communicate registration details and coordinate learning groups.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-primary uppercase tracking-wide">4. Data Security & Retention</h2>
              <p>
                We implement appropriate administrative and technical measures to secure your personal information. We only store your data for as long as is necessary to manage your registration, deliver our language instruction, and comply with standard tax and accounting regulations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-primary uppercase tracking-wide">5. Your Rights</h2>
              <p>Depending on your location, you have the right to request access to the personal data we hold about you, request corrections to incorrect data, or request the deletion of your personal data. To exercise any of these rights, please contact us using the details below.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-primary uppercase tracking-wide">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your data, please reach out to us:</p>
              <p className="pl-4 border-l-2 border-primary/50 text-foreground/90 font-medium">
                Email: info.levelupfrench@gmail.com <br />
                Phone / WhatsApp: +91 9392094201
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
