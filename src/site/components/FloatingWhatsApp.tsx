import React from "react";
import { createWhatsAppUrl } from "../data/krioraData";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Floating Button with Official WhatsApp Icon */}
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-source-25d366 hover:bg-source-20ba59 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white/40 whatsapp-pulse"
        aria-label="Chat with KRIORA on WhatsApp (+91 96877 39779)"
        title="Chat with KRIORA on WhatsApp (+91 96877 39779)"
      >
        <WhatsAppIcon className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
