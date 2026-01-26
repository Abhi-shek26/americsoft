import { Calendar, Shield, Users, Target } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import Section from "@/components/shared/Section";
import CTABand from "@/components/shared/CTABand";
import FadeInView from "@/components/shared/FadeInView";
import { SITE } from "@/content/site";

const highlights = [
  { icon: Calendar, label: "Founded", value: "2012" },
  { icon: Shield, label: "Focus", value: "Federal & Regulated" },
  { icon: Users, label: "Approach", value: "Architect-Led Teams" },
];

const values = [
  {
    title: "Solutions Delivery Focus",
    description: "We design, implement, and operate federal IT systems. Our teams deliver production solutions, not just consulting recommendations.",
  },
  {
    title: "Security & Compliance by Design",
    description: "Compliance isn't an afterthought—it's built into every architecture decision from day one, aligned with federal requirements.",
  },
  {
    title: "Mission-Critical Experience",
    description: "Proven delivery across defense (F-35 PHM), aviation safety (FAA), federal financial systems, and public health programs.",
  },
  {
    title: "Long-Term Partnership",
    description: "We build relationships that evolve with your mission, providing sustained engineering partnership and technical expertise.",
  },
];

const About = () => {
  return (
    <Layout>
      <Hero
        headline="About AmericSoft"
        subhead="Over two decades delivering federal IT solutions — defense, aviation, financial, and public health."
        variant="simple"
        backgroundImageUrl="/generated_images/About.png"
      />

      {/* About Narrative */}
      <Section>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <FadeInView>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Founded in {SITE.foundedYear}, {SITE.name} is a U.S.-based Federal IT products and services company with extensive experience supporting government agencies and regulated enterprises.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We operate across defense, aviation, federal financial systems, and public health—delivering mission-critical technology including data engineering, cloud modernization, and AI-enabled platforms. Our approach combines technical depth with a practical understanding of federal compliance and operational requirements.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, artificial intelligence and agentic systems represent a strategic product line within our broader federal technology portfolio, complementing our proven capabilities in secure data platforms and regulated cloud environments.
              </p>
            </FadeInView>
          </div>

          <div className="lg:col-span-2">
            <FadeInView delay={0.2} direction="right">
              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl border border-border p-6 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-xl font-bold text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted" title="Our Values" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 h-full hover:border-accent/30 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </Section>

      {/* Mission Statement */}
      <Section>
        <FadeInView>
          <div className="bg-hero rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed">
              To deliver trusted federal IT solutions—from defense-grade data platforms to AI-enabled systems—built with the engineering rigor, security controls, and compliance frameworks that mission-critical government operations require.
            </p>
          </div>
        </FadeInView>
      </Section>

      <CTABand
        title="Partner with us"
        description="Let's discuss how we can support your mission."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </Layout>
  );
};

export default About;
