import { Shield, Eye, Lock, FileCheck, Cloud, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import Section from "@/components/shared/Section";
import PPTRTable from "@/components/shared/PPTRTable";
import CTABand from "@/components/shared/CTABand";
import FadeInView from "@/components/shared/FadeInView";

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

const Federal = () => {
  return (
    <Layout>
      <Hero
        headline="Federal AI & Agentic Systems"
        subhead="Governed AI that stands up to compliance, audits, and mission risk."
        variant="simple"
      />

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

      {/* Use Cases */}
      <Section variant="muted" title="Federal Use Cases">
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
                  <strong className="text-foreground">F-35 PHM Data Management:</strong> Defense-grade data engineering and analytics supporting aircraft health monitoring and operational readiness.
                </p>
                <p>
                  <strong className="text-foreground">FAA Aviation Safety:</strong> High-reliability data platforms for radar data processing and airspace analytics under strict regulatory requirements.
                </p>
                <p>
                  <strong className="text-foreground">Federal Financial Systems:</strong> Enterprise-grade data engineering for accuracy, traceability, and resilience.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </Section>

      {/* Delivery Approach */}
      <Section title="Our Delivery Approach" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {deliverySteps.map((step, index) => (
            <FadeInView key={index} delay={index * 0.15}>
              <div className="relative">
                {/* Connector line */}
                {index < deliverySteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-2xl font-bold text-accent">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            </FadeInView>
          ))}
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
