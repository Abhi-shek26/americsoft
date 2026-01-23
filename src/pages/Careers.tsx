import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import Section from "@/components/shared/Section";
import FadeInView from "@/components/shared/FadeInView";
import { Button } from "@/components/ui/button";
import { SITE } from "@/content/site";

const openRoles = [
  {
    title: "Senior AI/ML Engineer",
    type: "Full-time",
    description: "Design and implement AI agent architectures for federal environments.",
  },
  {
    title: "Principal Data Engineer",
    type: "Full-time",
    description: "Build secure data pipelines and foundations for AI-ready platforms.",
  },
  {
    title: "DevSecOps Engineer",
    type: "Full-time",
    description: "Implement CI/CD and security automation for GovCloud environments.",
  },
  {
    title: "Cloud Solutions Architect",
    type: "Full-time",
    description: "Design and implement AWS GovCloud and Azure Government architectures.",
  },
];

const benefits = [
  "Mission-critical federal programs (defense, aviation, financial, public health)",
  "Technical leadership opportunities on complex systems",
  "Competitive compensation and comprehensive benefits",
  "Remote-friendly work environment",
  "Professional development and continuous learning",
  "Security clearance sponsorship opportunities available",
];

const Careers = () => {
  return (
    <Layout>
      <Hero
        headline="Careers at AmericSoft Federal"
        subhead="Join a team delivering federal IT solutions across defense, aviation, financial, and public health missions."
        variant="simple"
        backgroundImageUrl="/generated_images/Career.png"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We seek talented engineers and architects with experience in federal IT environments. Our teams deliver across AI engineering, data platforms, DevSecOps, cloud modernization, and defense/aviation systems. If you're ready to support mission-critical federal programs, we'd love to hear from you.
            </p>
          </FadeInView>

          {/* Open Roles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openRoles.map((role, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="bg-card rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300 group cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-foreground">{role.title}</h3>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                            {role.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{role.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <FadeInView>
            <div className="bg-muted/50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Why Join AmericSoft?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Apply CTA */}
          <FadeInView>
            <div className="bg-hero rounded-2xl p-8 lg:p-10 text-center">
              <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Apply?
              </h3>
              <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
                Send your resume and a brief note about the role you're interested in.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-cyan-light text-accent-foreground font-semibold"
              >
                <a href={`mailto:${SITE.email}?subject=Career Inquiry`}>
                  Email Your Resume
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </FadeInView>
        </div>
      </Section>
    </Layout>
  );
};

export default Careers;
