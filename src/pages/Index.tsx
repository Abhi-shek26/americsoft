import { motion } from "framer-motion";
import { Check, Building2, Briefcase, HeartPulse, Truck, Users, Calendar, Shield, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/shared/Hero";
import Section from "@/components/shared/Section";
import CardGrid from "@/components/shared/CardGrid";
import PPTRTable from "@/components/shared/PPTRTable";
import CTABand from "@/components/shared/CTABand";
import FadeInView from "@/components/shared/FadeInView";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import BackgroundImage from "@/components/shared/BackgroundImage";
import { PILLARS, FEDERAL_READY, WHY_AMERICSOFT, INDUSTRIES, SITE } from "@/content/site";

const industryIcons = [Building2, Briefcase, HeartPulse, Truck];

const stats = [
  { end: 22, suffix: "+", label: "Years of Excellence", icon: <Calendar className="h-7 w-7 text-cyan" /> },
  { end: 150, suffix: "+", label: "Projects Delivered", icon: <Award className="h-7 w-7 text-cyan" /> },
  { end: 50, suffix: "+", label: "Federal Clients", icon: <Shield className="h-7 w-7 text-cyan" /> },
  { end: 100, suffix: "%", label: "Client Satisfaction", icon: <Users className="h-7 w-7 text-cyan" /> },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        headline="Federal AI & Agentic Systems Engineering"
        subhead="Secure • Governed • Mission-Ready AI for Federal & Regulated Environments"
        body={`${SITE.name} is a U.S.-based technology firm delivering AI-driven, agentic platforms and federal IT modernization services. Founded in ${SITE.foundedYear}, we bring decades of experience in enterprise data platforms, cloud modernization, and mission-critical systems—now evolved into production-grade AI and agentic architectures designed for compliance, auditability, and scale.`}
        primaryCta={{ text: "Talk to an Architect", href: "/contact" }}
        secondaryCta={{ text: "Federal Capabilities", href: "/federal" }}
        showIllustration
      />

      {/* Stats Section */}
      <Section variant="muted">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </Section>

      {/* 4 Pillars Section */}
      <Section
        title="Our Core Capabilities"
        subtitle="Comprehensive AI and platform engineering services designed for federal and regulated environments."
        centered
      >
        <CardGrid items={PILLARS} columns={4} />
      </Section>

      {/* Federal-Ready AI Section */}
      <Section variant="muted" title="What Makes Our AI Federal-Ready">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <FadeInView>
            <div className="space-y-3 sm:space-y-4">
              {FEDERAL_READY.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-card rounded-xl p-3 sm:p-4 border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </FadeInView>

          <FadeInView delay={0.2} direction="right">
            <div className="relative rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden">
              <BackgroundImage
                imageUrl="/generated_images/federal_capabilities_section_background.png"
                overlay="dark"
                overlayOpacity={50}
              />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-display">
                  Why AmericSoft
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {WHY_AMERICSOFT.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80 text-sm sm:text-base">
                      <div className="w-2 h-2 rounded-full bg-cyan-glow mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInView>
        </div>
      </Section>

      {/* Industries Section */}
      <Section
        title="Industries We Serve"
        subtitle="Trusted by organizations operating in mission-critical and highly regulated environments."
        centered
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industryIcons[index];
            return (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-card rounded-2xl border border-border p-4 sm:p-6 text-center hover:border-accent/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                  </div>
                  <p className="font-medium text-foreground text-sm sm:text-base">{industry}</p>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </Section>

      {/* PPTR Table Section */}
      <Section
        variant="muted"
        title="People • Process • Tools • Experience"
        subtitle="Our integrated approach to delivering mission-critical solutions."
      >
        <PPTRTable />
      </Section>

      {/* Final CTA */}
      <CTABand
        title="Build trusted AI for real missions."
        description="Partner with architects who understand federal-grade requirements."
        buttonText="Contact AmericSoft"
        buttonHref="/contact"
      />
    </Layout>
  );
};

export default Index;
