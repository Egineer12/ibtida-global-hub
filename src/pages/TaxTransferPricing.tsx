import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Scale,
  Globe,
  Building,
  Receipt,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const taxServices = [
  {
    icon: FileText,
    title: "Corporate Tax Compliance",
    description: "We manage tax compliance for businesses across different jurisdictions:",
    features: [
      "Tax registrations",
      "Monthly/quarterly tax filings",
      "Annual corporate tax returns",
      "Withholding tax",
      "Zakat (KSA)",
      "VAT filings (GCC)",
      "Compliance calendar management",
    ],
  },
  {
    icon: Scale,
    title: "Transfer Pricing Compliance",
    description: "Comprehensive transfer pricing documentation and support:",
    features: [
      "Local File",
      "Master File",
      "Benchmarking studies",
      "CbCR preparation support",
      "CbCR notification support",
      "Nexus & TP risk assessments",
      "Operational TP adjustments",
      "Transfer pricing policies",
    ],
  },
  {
    icon: Globe,
    title: "Transfer Pricing Advisory",
    description: "Strategic advisory services for complex transfer pricing matters:",
    features: [
      "Intercompany pricing",
      "Value chain analysis",
      "Business restructuring",
      "TP audit defense",
      "APA support",
      "BEPS alignment",
    ],
  },
  {
    icon: Building,
    title: "Pillar Two (BEPS 2.0) Services",
    description: "Navigate the new global minimum tax rules with confidence:",
    features: [
      "Impact assessments",
      "GloBE calculations",
      "Data mapping",
      "QDMTT support",
      "Documentation readiness",
      "Model scenario planning",
      "Public CbCR review and support",
    ],
  },
  {
    icon: ShieldCheck,
    title: "ZATCA (Saudi Arabia) Advisory",
    description: "Specialized support for Saudi Arabian tax requirements:",
    features: [
      "TP documentation compliant with ZATCA",
      "Zakat computations",
      "Handling queries & audit responses",
      "Appeals and objection support",
      "TP court case analysis",
      "KSA-specific bylaw interpretation",
    ],
  },
  {
    icon: Receipt,
    title: "Indirect Tax Support",
    description: "VAT and e-invoicing compliance services:",
    features: [
      "VAT compliance",
      "VAT advisory",
      "E-invoicing implementation support",
      "Refund claim preparation",
    ],
  },
];

const whyOutsource = [
  "Significant cost advantage",
  "Team trained in OECD, GCC, UK, EU rules",
  "Strong KSA expertise",
  "Strong documentation quality",
  "Faster turnaround using AI-enabled workflows",
  "Confidential & secure environment",
];

const TaxTransferPricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero-bg text-primary-foreground py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-slide-up">
              Tax Services & Transfer Pricing Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 animate-slide-up animation-delay-100">
              Expert tax compliance and transfer pricing services for multinational businesses across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {taxServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-custom-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Outsource */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                The Smart Choice
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                Why Outsource Tax & TP to Us?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our specialized team combines deep technical knowledge with AI-powered efficiency to deliver superior tax and transfer pricing services at a fraction of traditional costs.
              </p>
              <div className="space-y-4">
                {whyOutsource.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                Global Coverage
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["GCC", "UK", "EU", "US", "Canada", "OECD"].map((region, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-secondary rounded-lg py-4 px-6"
                  >
                    <span className="font-heading font-semibold text-primary">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero-bg text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Need Expert Tax & Transfer Pricing Support?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let our specialists help you navigate complex tax regulations and ensure compliance.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="font-heading font-semibold uppercase tracking-wide group">
              Get a Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default TaxTransferPricing;
