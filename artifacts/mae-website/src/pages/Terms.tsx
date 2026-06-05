import { motion } from "framer-motion";

export default function Terms() {
  return (
    <main data-testid="terms-page" className="min-h-screen">
      <section className="pt-28 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Legal</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-sm text-gray-500">Last updated: June 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-gray max-w-none">
          <h2>Enrollment & Fees</h2>
          <p>Enrollment in any Maharshi Advanced English course is confirmed only after payment of the required course fees. Fees are non-refundable once a batch has commenced. Fee structures are subject to change; the institute will communicate any changes before enrollment.</p>
          <h2>Course Conduct</h2>
          <p>Students are expected to maintain a respectful and professional attitude in all sessions — online and offline. The institute reserves the right to discontinue enrollment of any student whose conduct disrupts the learning environment.</p>
          <h2>Attendance</h2>
          <p>Regular attendance is encouraged for maximum benefit. The institute does not guarantee specific outcomes based on partial attendance. Students who miss sessions may request makeup notes or recordings at the discretion of the trainer.</p>
          <h2>Online Classes</h2>
          <p>Online sessions are conducted via Zoom or Google Meet. Students are responsible for their own internet connection and device. The institute is not liable for technical issues on the student's end.</p>
          <h2>Intellectual Property</h2>
          <p>All course materials, notes, and recordings provided by Maharshi Advanced English are proprietary. Students may not reproduce, distribute, or share these materials without prior written consent.</p>
          <h2>Changes to Terms</h2>
          <p>Maharshi Advanced English reserves the right to modify these terms at any time. Students will be notified of significant changes.</p>
          <h2>Contact</h2>
          <p>For any queries about these terms, contact us at <a href="mailto:maharshisoftskills@gmail.com" className="text-primary hover:underline">maharshisoftskills@gmail.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
