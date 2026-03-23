import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import BatchesSection from "@/components/BatchesSection";
import PaymentSection from "@/components/PaymentSection";
import EnrollmentForm from "@/components/EnrollmentForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <CoursesSection />
    <BatchesSection />
    <PaymentSection />
    <TestimonialsSection />
    <EnrollmentForm />
    <Footer />
    <WhatsAppPopup />
  </>
);

export default Index;
