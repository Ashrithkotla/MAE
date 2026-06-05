import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main data-testid="privacy-page" className="min-h-screen">
      <section className="pt-28 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Legal</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-500">Last updated: June 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-gray max-w-none">
          <h2>Information We Collect</h2>
          <p>When you contact us through the website form or WhatsApp, we collect your name, phone number, email address, and any other information you voluntarily provide. We use this information solely to respond to your enquiry and to inform you about our courses and batches.</p>
          <h2>How We Use Your Information</h2>
          <p>We use the information you provide to: contact you about your course enquiry, send you information about upcoming batches and programs, and improve our services. We do not sell, share, or disclose your personal information to third parties.</p>
          <h2>Cookies</h2>
          <p>Our website may use basic analytics cookies to understand how visitors use the site. These do not collect personally identifiable information.</p>
          <h2>Data Security</h2>
          <p>We take reasonable measures to protect your information from unauthorized access or disclosure. Your data is stored securely and access is limited to authorized personnel only.</p>
          <h2>Contact</h2>
          <p>If you have any questions about this Privacy Policy, contact us at <a href="mailto:maharshisoftskills@gmail.com" className="text-primary hover:underline">maharshisoftskills@gmail.com</a> or call us at +91 7286 066 661.</p>
        </div>
      </section>
    </main>
  );
}
