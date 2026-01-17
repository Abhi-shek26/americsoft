import { Mail, Phone, MapPin, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import FadeInView from "@/components/shared/FadeInView";
import { SITE } from "@/content/site";

const Contact = () => {
  return (
    <Layout>
      <Hero
        headline="Talk to an Architect"
        subhead="Let's discuss how we can support your mission-critical initiatives."
        variant="simple"
      />

      <Section>
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <FadeInView>
              <ContactForm />
            </FadeInView>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <FadeInView delay={0.1} direction="right">
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <span>{SITE.email}</span>
                  </a>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <span>{SITE.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <span>United States</span>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.2} direction="right">
              <div className="bg-hero rounded-2xl p-6">
                <h3 className="font-bold text-lg text-primary-foreground mb-4">
                  Federal Engagements
                </h3>
                <p className="text-primary-foreground/70 mb-4">
                  Federal engagements and prime/sub support welcome.
                </p>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <FileText className="h-5 w-5 text-accent" />
                  <span>Capabilities statement available upon request</span>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.3} direction="right">
              <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond within 24 business hours. For urgent matters, please call directly.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
