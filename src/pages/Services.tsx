import { Bot, Layers, Database, Cloud, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import Section from "@/components/shared/Section";
import CTABand from "@/components/shared/CTABand";
import FadeInView from "@/components/shared/FadeInView";

const services = [
  {
    icon: Bot,
    title: "AI Agentic Platforms & Engineering",
    items: [
      "Multi-agent orchestration frameworks",
      "Decision-support agents",
      "Workflow automation agents",
      "Compliance-aware assistants",
      "Human-in-the-loop and policy controls",
    ],
  },
  {
    icon: Layers,
    title: "Secure Multi-LLM Orchestration",
    items: [
      "Approved-model routing & failover",
      "Model isolation & access controls",
      "Prompt versioning & governance",
      "Response validation and guardrails",
      "Vendor-neutral architecture",
    ],
  },
  {
    icon: Database,
    title: "Data Foundations for AI",
    items: [
      "Ingestion + ETL/ELT pipelines",
      "Unstructured processing (docs, logs, messages)",
      "Semantic layer / knowledge graph ready patterns",
      "Lineage, provenance, and auditability",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevSecOps Modernization",
    items: [
      "AWS GovCloud / Azure Government",
      "IaC (Terraform/Ansible)",
      "CI/CD with embedded security",
      "Observability + logging",
      "Performance and cost optimization",
    ],
  },
  {
    icon: Shield,
    title: "AI Governance, Risk & Compliance",
    items: [
      "AI policy enforcement frameworks",
      "Audit-ready logging and explainability",
      "Model lifecycle management",
      "Risk controls for AI decisions",
    ],
  },
];

const engagementModels = [
  "Architecture & technical strategy",
  "Pilot → production enablement",
  "Platform modernization",
  "Long-term engineering partnership",
];

const Services = () => {
  return (
    <Layout>
      <Hero
        headline="Services"
        subhead="Federal-grade AI and platform engineering that moves from strategy → build → production."
        variant="simple"
      />

      <Section>
        <p className="text-lg text-muted-foreground max-w-3xl mb-16">
          AmericSoft delivers federal-grade AI and platform engineering services that move from strategy → build → production operations. Our services are designed for organizations that require compliance, security, and mission reliability.
        </p>

        <div className="space-y-8">
          {services.map((service, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-2xl border border-border p-6 lg:p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <ArrowRight className="h-4 w-4 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Engagement Models" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {engagementModels.map((model, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <div className="bg-card rounded-xl border border-border p-6 text-center hover:border-accent/30 hover:shadow-md transition-all duration-300">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold mb-4">
                  {index + 1}
                </span>
                <p className="font-medium text-foreground">{model}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </Section>

      <CTABand
        title="Ready to modernize your systems?"
        description="Let's discuss your requirements and build a roadmap."
        buttonText="Talk to an Architect"
        buttonHref="/contact"
      />
    </Layout>
  );
};

export default Services;
