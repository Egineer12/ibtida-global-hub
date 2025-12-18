import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Calculator,
  Headphones,
  Database,
  Code,
  UserCheck,
  FileText,
  ArrowUpRight,
  Scale,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Process Outsourcing",
    description: "Back-office processing, data entry, and workflow management.",
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    description: "Bookkeeping, AP/AR management, and financial reporting.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Email, chat, and social media support with AI assistance.",
  },
  {
    icon: Database,
    title: "Data & Content Management",
    description: "Data enrichment, web research, and content moderation.",
  },
  {
    icon: Code,
    title: "Technology Outsourcing",
    description: "IT support, QA testing, and cloud administration.",
  },
  {
    icon: UserCheck,
    title: "Executive Assistance",
    description: "Virtual assistant and administrative support services.",
  },
  {
    icon: FileText,
    title: "Tax Compliance",
    description: "Tax registrations, filings, and compliance management.",
  },
  {
    icon: Scale,
    title: "Transfer Pricing",
    description: "Local File, Master File, and benchmarking studies.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Comprehensive Outsourcing Solutions
          </h2>
          <p className="text-muted-foreground">
            From business operations to specialized tax services, we deliver end-to-end solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="gradient-bg text-primary-foreground font-heading font-semibold uppercase tracking-wide group">
              Explore All Services
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
