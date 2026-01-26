import {
  Shield,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Award,
  FileText,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import Section from "@/components/shared/Section";
import FadeInView from "@/components/shared/FadeInView";
import { SITE } from "@/content/site";

const coreCapabilities = [
  {
    title: "Federal IT Products & Platforms",
    items: [
      "Production-grade federal IT systems",
      "Secure and compliant platform delivery",
      "Long-term operations & sustainment",
    ],
  },
  {
    title: "AI Agentic Solutions (Governed & Controlled)",
    items: [
      "Policy-aware agentic architectures",
      "Controlled multi-agent workflows",
      "Mission-aligned AI decision systems",
    ],
  },
  {
    title: "Defense & Aviation Data Systems",
    items: [
      "F-35 PHM data management",
      "Aviation safety & radar data platforms",
      "Operational readiness analytics",
    ],
  },
  {
    title: "Cloud & Platform Modernization",
    items: [
      "Government cloud migrations",
      "Secure cloud-native architectures",
      "Legacy system modernization",
    ],
  },
  {
    title: "Mission-Critical Data Engineering",
    items: [
      "High-reliability data pipelines",
      "Analytics foundations",
      "Regulatory-compliant data platforms",
    ],
  },
  {
    title: "Integrated Federal Solutions Delivery",
    items: [
      "End-to-end program delivery",
      "Prime & subcontractor engagement",
      "Compliance-aligned execution",
    ],
  }
];

const differentiators = [
  "Federal IT products built for production, not prototypes",
  "Proven defense aviation experience (F-35 PHM)",
  "FAA enterprise data platform delivery",
  "Governed and controlled AI agentic systems",
  "Secure-by-design architectures for regulated environments",
  "Prime and subcontractor federal engagement experience",
];

const pastPerformance = [
  {
    domain: "Defense Aviation",
    program: "F-35 Program – PHM Data Management",
    description:
      "Supported defense aviation programs including the F-35, delivering PHM data management, government cloud migration, and analytics foundations enabling aircraft health monitoring and operational readiness.",
  },
  {
    domain: "Federal Aviation Administration",
    program: "FAA Enterprise Information Management (EIM)",
    description:
      "Supports the FAA EIM program as a subcontractor to GDIT, delivering enterprise aviation data platform management and analytics foundations that enable reliable information sharing and mission-critical decision support.",
  },
];

const CapabilityStatement = () => {
  return (
    <Layout>
      <Hero
        headline="AmericSoft Federal"
        subhead="Federal IT Products & AI Agentic Solutions"
        variant="simple"
        backgroundImageUrl="/generated_images/capability.png"
      />

      {/* Company Overview */}
      <Section title="Company Overview">
        <div className="grid lg:grid-cols-3 gap-1">
          <div className="lg:col-span-2">
            <FadeInView>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    AmericSoft Solutions Inc.
                  </strong>{" "}
                  is a U.S.-based Federal IT products and services company
                  delivering secure, scalable, and production-ready technology
                  solutions to government agencies and regulated enterprises.
                </p>
                <p>
                  Founded in 2012, AmericSoft specializes in solutions delivery
                  across defense aviation, FAA systems, data engineering, cloud
                  modernization, and AI-enabled platforms operating in
                  high-trust federal environments.
                </p>
                <p>
                  Our work centers on {" "}
                  <strong className="text-foreground">
                    mission-critical solutions delivery
                  </strong>{" "}
                  —building, modernizing, and operating federal IT products,
                  governed AI agentic systems, and secure data platforms that
                  meet strict regulatory and operational requirements.
                </p>
              </div>
            </FadeInView>
          </div>

          <div>
            <FadeInView delay={0.15} direction="right">
              <div className="space-y-3">
                <div className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3 mb-1">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-foreground">
                      Location
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {SITE.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {SITE.location}
                  </p>
                </div>

                <div className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3 mb-1">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-foreground">
                      Contact
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {SITE.email}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {SITE.phone}
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </Section>

      {/* Core Focus Areas */}
      <Section
        variant="muted"
        title="Core Focus Areas"
        subtitle="Federal IT products, platforms, and governed AI systems"
        className="py-2"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-fr">
          {coreCapabilities.map((capability, index) => (
            <FadeInView key={index} delay={index * 0.04}>
              <div className="bg-card rounded-xl border border-border p-4 h-full lg:col-span-2">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {capability.title}
                </h3>
                <ul className="space-y-2">
                  {capability.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          ))}
        </div>
      </Section>

      {/* Past Performance */}
      <Section
        title="Past Performance & Experience"
        subtitle="Proven delivery across defense aviation and FAA missions"
        className="py-2"
      >
        <div className="grid md:grid-cols-2 gap-3">
          {pastPerformance.map((perf, index) => (
            <FadeInView key={index} delay={index * 0.08}>
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-accent">
                    {perf.domain}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {perf.program}
                </h3>
                <p className="text-muted-foreground">
                  {perf.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </Section>

      {/* Differentiators */}
      <Section
        variant="muted"
        title="Key Differentiators"
        centered
        className="py-2"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {differentiators.map((diff, index) => (
            <FadeInView key={index} delay={index * 0.04}>
              <div className="flex items-start gap-3 bg-card rounded-xl border border-border p-4">
                <Shield className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{diff}</span>
              </div>
            </FadeInView>
          ))}
        </div>
      </Section>

      {/* Federal Engagement Model */}
      <Section title="Federal Engagement Model" centered className="py-2">
        <FadeInView>
          <div className="bg-card rounded-xl border border-border p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold text-foreground">
                Engagement Approach
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              AmericSoft delivers federal IT solutions through prime contractor
              partnerships and subcontractor engagements, embedding experienced
              delivery teams into mission-critical programs across defense and
              civilian agencies.
            </p>
            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">
                  Engagement Model:
                </strong>{" "}
                Prime and subcontractor delivery, federal program integration,
                and compliance-aligned execution.
              </p>
            </div>
          </div>
        </FadeInView>
      </Section>

      {/* Contact CTA */}
      <Section title="Engage AmericSoft Federal" centered>
        <FadeInView>
          <div className="bg-hero rounded-2xl p-4 max-w-3xl mx-auto text-center mb-5">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Mission-Critical Federal IT. Delivered.
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-5">
              Partner with a proven federal IT delivery organization supporting
              defense, aviation, and regulated federal missions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary-foreground">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary-foreground">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href={`tel:${SITE.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </FadeInView>
      </Section>
    </Layout>
  );
};

export default CapabilityStatement;