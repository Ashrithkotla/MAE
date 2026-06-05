import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917286066661?text=Hi! I want to know more about your English courses."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
      data-testid="whatsapp-float"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
