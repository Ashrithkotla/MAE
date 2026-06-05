import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6" data-testid="not-found-page">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="text-8xl font-bold text-gray-100 mb-4 select-none">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          The page you are looking for doesn't exist or may have been moved. Let's get you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-medium rounded-xl text-sm hover:bg-primary/90 transition-colors" data-testid="not-found-home">
            <ArrowLeft size={14} /> Go Home
          </Link>
          <Link href="/courses" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-xl text-sm hover:bg-gray-50 transition-colors" data-testid="not-found-courses">
            View Courses <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
