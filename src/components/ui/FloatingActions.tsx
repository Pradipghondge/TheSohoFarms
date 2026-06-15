import { contact } from "@/constants/content";

export function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick actions">
      <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>Call</a>
      <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}>WhatsApp</a>
      <a href="#forms">Visit</a>
    </div>
  );
}
