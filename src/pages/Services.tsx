import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Calculator,
  Headphones,
  Database,
  Code,
  UserCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Process Outsourcing (BPO)",
    description: "Streamline your operations with our comprehensive BPO solutions.",
    features: [
      "Back-office processing",
      "Data entry",
      "Document management",
      "Order & invoice processing",
      "CRM administration",
      "Workflow management",
    ],
  },
  {
    icon: Calculator,
    title: "Finance & Accounting Outsourcing",
    description: "Expert financial management to keep your books accurate and compliant.",
    features: [
      "Bookkeeping",
      "AP/AR management",
      "Reconciliation",
      "Payroll support",
      "Monthly management accounts",
      "Financial reporting and analysis",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Support Outsourcing",
    description: "AI-assisted tools improve response speed & accuracy for exceptional customer experience.",
    features: [
      "Email support",
      "Live chat support",
      "Social media responses",
      "Ticket system support",
      "Call center (optional setup)",
      "24/7 customer care",
    ],
  },
  {
    icon: Database,
    title: "Data & Content Operations",
    description: "Ensure data quality and content excellence across all channels.",
    features: [
      "Data enrichment",
      "Data cleaning",
      "Web research",
      "Product listing (e-commerce)",
      "Catalog updates",
      "Content moderation & QA",
    ],
  },
  {
    icon: Code,
    title: "Technology Outsourcing",
    description: "Technical support and development assistance for your IT needs.",
    features: [
      "Level 1 & 2 IT support",
      "QA testing",
      "UAT support",
      "Software support",
      "Cloud admin assistance",
      "AI-tool integration",
    ],
  },
  {
    icon: UserCheck,
    title: "Executive & Admin Assistance",
    description: "Professional support to help executives focus on what matters most.",
    features: [
      "Virtual assistant",
      "Calendar management",
      "Appointment scheduling",
      "Email handling",
      "Travel coordination",
      "Business research",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero-bg text-primary-foreground py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-slide-up">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/80 animate-slide-up animation-delay-100">
              Comprehensive outsourcing solutions powered by AI and delivered by expert talent.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
                    <div className="relative bg-card rounded-2xl p-8 border border-border shadow-custom-lg">
                      <div className="aspect-video rounded-lg bg-secondary flex items-center justify-center">
                        <service.icon className="w-20 h-20 text-primary/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Services CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Looking for Tax & Transfer Pricing Services?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We offer specialized tax compliance, transfer pricing documentation, and BEPS 2.0 advisory services for multinational businesses.
            </p>
            <Link to="/tax-transfer-pricing">
              <Button size="lg" className="gradient-bg text-primary-foreground font-heading font-semibold uppercase tracking-wide group">
                Explore Tax Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero-bg text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let us help you streamline your operations and reduce costs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="font-heading font-semibold uppercase tracking-wide">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
