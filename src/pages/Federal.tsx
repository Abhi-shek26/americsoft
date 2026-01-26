import { Shield, Eye, Lock, FileCheck, Cloud, Check, ArrowRight, Building, ActivitySquare } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import Section from "@/components/shared/Section";
import PPTRTable from "@/components/shared/PPTRTable";
import CTABand from "@/components/shared/CTABand";
import FadeInView from "@/components/shared/FadeInView";
import BackgroundImage from "@/components/shared/BackgroundImage";
import { SITE, NAICS_CODES } from "@/content/site";

const federalReadiness = [
  { icon: Shield, text: "Policy-aware agents" },
  { icon: Eye, text: "Human-in-the-loop controls" },
  { icon: FileCheck, text: "Audit trails + observability" },
  { icon: Lock, text: "Secure model access" },
  { icon: Cloud, text: "FedRAMP/GovCloud deployment alignment" },
];

const useCases = [
  "Operations automation & mission workflows",
  "Policy & compliance analysis support",
  "Data intelligence & reporting acceleration",
  "Secure knowledge retrieval & analyst assistance",
  "System modernization with AI-ready architecture",
];

const deliverySteps = [
  {
    step: 1,
    title: "Assess & Architect",
    description: "Governance, data, and controls evaluation",
  },
  {
    step: 2,
    title: "Pilot & Prove",
    description: "Measured outcomes and security gates",
  },
  {
    step: 3,
    title: "Deploy & Operate",
    description: "Monitoring, auditability, and lifecycle management",
  },
];

const missionVisuals = [
  {
    title: "Defense Technology — F-35 PHM",
    description: "Defense-grade data engineering enabling aircraft health monitoring, maintenance intelligence, and operational readiness.",
    imageUrl: "/generated_images/defense_f35_phm_visual.png",
  },
  {
    title: "FAA Aviation Technology",
    description: "High-reliability radar data processing and airspace analytics for aviation safety.",
    imageUrl: "/generated_images/faa_radar_safety_visual.png",
  },
  {
    title: "Federal Financial Systems",
    description: "Enterprise-grade platforms where accuracy, traceability, and availability are non‑negotiable.",
    imageUrl: "/generated_images/federal_financial_systems_visual.png",
  },
  {
    title: "Federal Public Health & Mission Analytics",
    description: "Secure data platforms for population‑level analytics, reporting, and mission decision support.",
    imageUrl: "/generated_images/federal_public_health_visual.png",
  },
];

const Federal = () => {
  return (
    <Layout>
      <Hero
        headline="AmericSoft Federal"
        subhead="Mission-critical IT solutions across defense, aviation, federal financial systems, and public health."
        variant="simple"
        backgroundImageUrl="/generated_images/federal_financial_systems_visual.png"
      />

      {/* Narrative */}
      <Section title="Federal IT Solutions Delivery">
        <div className="space-y-4 text-lg text-muted-foreground max-w-4xl">
          <p>
            {SITE.name} is built around <strong className="text-foreground">solutions delivery</strong>. We design, implement, and operate federal IT systems while also providing expert consulting and highly skilled consultants across complex federal programs.
          </p>
          <p>
            Since {SITE.foundedYear}, we've operated across defense, aviation, data, cloud, and artificial intelligence domains—supporting high-trust federal missions with scalable, secure systems.
          </p>
          <p>
            <strong className="text-foreground">Artificial Intelligence</strong>, including agentic AI systems, is a strategic product line within our broader federal technology portfolio, complementing our core strengths in defense, aviation, data engineering, and regulated cloud modernization.
          </p>
        </div>
      </Section>

      {/* Federal Readiness */}
      <Section
        title="Federal-Ready AI Architecture"
        subtitle="Our AI systems are designed from the ground up for federal compliance and mission-critical reliability."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {federalReadiness.map((item, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <div className="bg-card rounded-2xl border border-border p-6 text-center hover:border-accent/30 hover:shadow-md transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="font-medium text-foreground">{item.text}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </Section>

      {/* Mission Visuals */}
      <Section variant="muted" title="Defense & Aviation Mission Visuals" subtitle="Representative programs and focus areas.">
        <div className="grid md:grid-cols-2 gap-6">
          {missionVisuals.map((mv, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <div className="relative rounded-2xl border border-border overflow-hidden h-96">
                <BackgroundImage imageUrl={mv.imageUrl} overlay="dark" overlayOpacity={45} />
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-2">{mv.title}</h3>
                  <p className="text-white/80">{mv.description}</p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section title="Federal Use Cases">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeInView>
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </FadeInView>

          <FadeInView delay={0.2} direction="right">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-xl font-bold mb-6">Mission-Critical Experience</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">F-35 PHM Data Management:</strong> Defense-grade technology supporting advanced aviation programs—aircraft health monitoring, maintenance intelligence, and operational readiness through secure, scalable data systems aligned with defense security and compliance requirements.
                </p>
                <p>
                  <strong className="text-foreground">FAA Aviation Technology:</strong> Extensive experience supporting FAA programs in aviation safety, radar data processing, and airspace analytics. Platforms designed for real-time datasets, integrity, and operational resilience.
                </p>
                <p>
                  <strong className="text-foreground">Federal Financial Systems:</strong> Secure, enterprise-grade data and analytics platforms built for accuracy, traceability, and high availability.
                </p>
                <p>
                  <strong className="text-foreground">Federal Public Health:</strong> Engineered data platforms enabling population-level analytics, reporting, and mission decision support.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </Section>

      {/* Contract Vehicles & Compliance */}
      <Section variant="muted" title="Federal Contract Vehicles & Compliance">
        <div className="bg-card rounded-2xl border border-border p-6">
          <p className="text-muted-foreground">
            {SITE.name} supports federal prime and subcontractor engagements, including FAA contract vehicles focused on aviation safety and airspace systems. Our delivery aligns with federal acquisition regulations and agency-specific compliance requirements.
          </p>
        </div>
      </Section>


      {/* PPTR Table */}
      <Section
        variant="muted"
        title="People • Process • Tools • Experience"
        subtitle="Our federal delivery capability at a glance."
      >
        <PPTRTable />
      </Section>

      {/* Engage AmericSoft Federal */}
      <Section title="Engage AmericSoft Federal" centered>
        <div className="max-w-2xl mx-auto space-y-3 text-center">
          <p className="text-muted-foreground">
            For federal agencies, primes, and partners seeking a proven technology delivery organization:
          </p>
          <div className="inline-flex items-center gap-3 text-foreground">
            <ActivitySquare className="h-5 w-5 text-accent" />
            <span>Email: {SITE.email}</span>
          </div>
          <div className="text-muted-foreground">
            <p>Phone: {SITE.phone}</p>
            <p>Address: {SITE.address}</p>
            <p>Location: {SITE.location}</p>
          </div>
        </div>
      </Section>

      <CTABand
        title="Discuss your federal AI initiative"
        description="Let's explore how we can support your mission requirements."
        buttonText="Contact AmericSoft"
        buttonHref="/contact"
      />
    </Layout>
  );
};

export default Federal;
