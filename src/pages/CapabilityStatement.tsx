import {
  Building2,
  Shield,
  Calendar,
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
import { SITE, NAICS_CODES } from "@/content/site";

const coreCapabilities = [
  {
    title: "Defense Technology & Aviation Systems",
    items: [
      "F-35 PHM Data Management & Analytics",
      "Aircraft health monitoring platforms",
      "Defense-grade secure data systems",
      "Maintenance intelligence & operational readiness",
    ],
  },
  {
    title: "FAA Aviation Technology",
    items: [
      "Aviation safety systems",
      "Radar data processing platforms",
      "Airspace analytics & monitoring",
      "Real-time aviation data management",
    ],
  },
  {
    title: "Federal Financial Systems",
    items: [
      "Enterprise data & analytics platforms",
      "Financial system modernization",
      "Secure transaction processing",
      "Compliance & audit-ready systems",
    ],
  },
  {
    title: "Federal Public Health & Mission Analytics",
    items: [
      "Population-level analytics platforms",
      "Mission decision support systems",
      "Secure health data engineering",
      "Reporting & visualization solutions",
    ],
  },
  {
    title: "Cloud & Data Engineering",
    items: [
      "AWS GovCloud & Azure Government",
      "Secure data pipelines & ETL",
      "Cloud migration & modernization",
      "Data lake & warehouse architecture",
    ],
  },
  {
    title: "Artificial Intelligence & Agentic Systems",
    items: [
      "AI-enabled decision support platforms",
      "Governed agentic architectures",
      "Multi-LLM orchestration frameworks",
      "Policy-aware AI systems",
    ],
  },
];

const differentiators = [
  "20+ years supporting federal and regulated missions",
  "Proven experience with defense-grade systems (F-35 PHM)",
  "FAA aviation safety program expertise",
  "Architect-led delivery teams with federal experience",
  "Security & compliance built into every solution",
  "Prime and subcontractor engagement experience",
];

const pastPerformance = [
  {
    domain: "Defense Aviation",
    program: "F-35 Prognostics & Health Management",
    description:
      "Defense-grade data engineering and analytics supporting aircraft health monitoring, maintenance intelligence, and operational readiness.",
  },
  {
    domain: "Aviation Safety",
    program: "FAA Aviation Technology Programs",
    description:
      "High-reliability platforms for aviation safety, radar data processing, and airspace analytics under strict regulatory requirements.",
  },
  {
    domain: "Federal Financial",
    program: "Federal Financial Systems",
    description:
      "Enterprise-grade data and analytics platforms for federal financial operations requiring accuracy, traceability, and resilience.",
  },
  {
    domain: "Public Health",
    program: "Federal Public Health Programs",
    description:
      "Secure data platforms enabling population-level analytics, reporting, and mission decision support for federal health agencies.",
  },
];

const CapabilityStatement = () => {
  return (
    <Layout>
      <Hero
        headline="Capability Statement"
        subhead="Federal IT Products & Services Delivering Mission-Critical Solutions"
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
                  <strong className="text-foreground">{SITE.name}</strong> is a
                  U.S. based Federal IT products and services company delivering
                  mission critical technology solutions to government agencies
                  and regulated enterprises.
                </p>
                <p>
                  Founded in {SITE.foundedYear}, we operate across defense,
                  aviation, data, cloud, and artificial intelligence
                  domains supporting high-trust federal missions with scalable,
                  secure systems.
                </p>
                <p>
                  Our delivery is built around {" "}
                  <strong className="text-foreground">
                    solutions engineering
                  </strong>
                  {" "} we design, implement, and operate federal IT systems while
                  providing expert consulting and highly skilled technical
                  consultants.
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

      {/* Core Capabilities */}
      <Section
        variant="muted"
        title="Core Capabilities"
        subtitle="Comprehensive federal IT delivery across mission-critical domains"
        className="py-2"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {coreCapabilities.map((capability, index) => (
            <FadeInView key={index} delay={index * 0.04}>
              <div className="bg-card rounded-xl border border-border p-4 h-full">
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
        subtitle="Proven delivery across defense, aviation, financial, and public health missions"
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

      {/* Contract Vehicles */}
      <Section title="Federal Contract Vehicles & Compliance" centered className="py-2">
        <FadeInView>
          <div className="bg-card rounded-xl border border-border p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold text-foreground">
                Contract Vehicles
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              {SITE.name} supports federal prime and subcontractor engagements,
              including FAA contract vehicles focused on aviation safety and
              airspace systems. Our delivery aligns with federal acquisition
              regulations and agency-specific compliance requirements.
            </p>
            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">
                  Acquisition Support:
                </strong>{" "}
                FAR-compliant delivery, DFARS awareness, and agency-specific
                compliance frameworks.
              </p>
            </div>
          </div>
        </FadeInView>
      </Section>

      {/* NAICS Codes */}
      <Section
        variant="muted"
        title="NAICS Codes"
        centered
        className="py-2"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {NAICS_CODES.map((naics, index) => (
            <FadeInView key={index} delay={index * 0.03}>
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="font-bold text-foreground">
                    {naics.code}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {naics.label}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section title="Engage AmericSoft Federal" centered >
        <FadeInView>
          <div className="bg-hero rounded-2xl p-4 max-w-3xl mx-auto text-center mb-5">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Partner with a Proven Federal IT Delivery Organization
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-5">
              For federal agencies, primes, and partners seeking mission-critical
              technology solutions.
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
