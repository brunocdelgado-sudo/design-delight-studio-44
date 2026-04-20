import { MessageCircle } from "lucide-react";

// Troque o número aqui (formato internacional, sem + ou espaços)
const PHONE_NUMBER = "5511999999999";
const MESSAGE = "Olá! Tenho interesse no KERA HAIR";

const WhatsAppButton = () => {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform duration-200 group-hover:scale-110">
        <MessageCircle className="h-7 w-7 text-white fill-white" strokeWidth={0} />
        <MessageCircle className="absolute h-7 w-7 text-[#25D366]" strokeWidth={2.2} />
      </span>
    </a>
  );
};

export default WhatsAppButton;
