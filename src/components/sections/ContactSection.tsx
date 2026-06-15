import { NotchedCardForm } from "@/components/ui/NotchedCardForm";

export function ContactSection() {
    return (
        <section className="contact-section" id="forms">
            <div className="contact-grid">
                <div className="contact-content-left" data-reveal>
                    <h2 data-reveal data-delay="1">Your Journey to a Longer, Better Life
                        <br />
                        <em data-reveal data-delay="2">Begins Here!</em>
                    </h2>
                    <div className="down-arrow-button" data-reveal data-delay="3">↓</div>
                </div>
                <NotchedCardForm title="Contact Us" type="site-visit"/>
            </div>
        </section>
    );
}
