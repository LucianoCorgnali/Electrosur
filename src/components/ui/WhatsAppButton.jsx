import { contact } from "../../data/siteContent";
import { createWhatsAppUrl } from "../../utils/contact";

const iconPath =
  "M16 3a13 13 0 0 0-11.1 19.8L3 29l6.4-1.7A13 13 0 1 0 16 3Zm0 23.6c-2.1 0-4.1-.6-5.8-1.7l-.4-.2-3.8 1 1-3.7-.2-.4A10.5 10.5 0 1 1 16 26.6Zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.3.2-.7.1-1.9-.9-3.1-1.7-4.4-3.9-.3-.6.3-.6.9-1.8.1-.2 0-.5 0-.7l-1-2.5c-.3-.6-.6-.5-.9-.5h-.7c-.2 0-.7.1-1 .5s-1.3 1.2-1.3 3c0 1.8 1.3 3.5 1.5 3.7.2.2 2.6 4 6.3 5.5 2.3 1 3.3 1.1 4.5.9.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.2-.3-.5-.4-.8-.5Z";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={createWhatsAppUrl(contact.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d={iconPath} />
      </svg>
    </a>
  );
}
