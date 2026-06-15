import { contact } from "@/constants/content";

export function ContactFooter() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h2>THE SOHO FARMS</h2>
          <p>Roha - Alibaug Region, Raigad</p>
          <p>Coordinates: 18.4059715, 73.1227036</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>{contact.phone}</p>
          <p>{contact.whatsapp}</p>
          <p>{contact.email}</p>
        </div>
        <div>
          <h3>Links</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href={contact.maps}>Google Maps</a>
        </div>
      </div>
    </footer>
  );
}
