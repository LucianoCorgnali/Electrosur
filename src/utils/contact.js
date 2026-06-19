import { contact } from "../data/siteContent";

export const createWhatsAppUrl = (message) =>
  `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
