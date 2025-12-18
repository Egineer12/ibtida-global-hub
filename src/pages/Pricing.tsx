import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Shared Resource Model",
    description: "For part-time support or fractional needs.",
    price: "$399–599",
    period: "per month",
    popular: false,
    features: [
      "Part-time dedicated support",
      "Flexible hours",
      "Training and onboarding",
      "Quality control",
      "AI-assisted workflows",
      "Reporting dashboard",
    ],
  },
  {
    name: "Dedicated Resource Model",
    description: "Full-time dedicated offshore team member.",
    price: "$799–1,199",
    period: "per month",
    popular: true,
    features: [
      "Full-time dedicated resource",
      "40 hours per week",
      "Training and onboarding",
      "Quality control & supervision",
      "AI-assisted workflows",
      "Data confidentiality",
      "Reporting dashboard",
      "SLA-based delivery",
    ],
  },
];

const taxPricing = [
  { service: "Local File", price: "$2,000–5,000" },
  { service: "Master File", price: "$3,000–7,000" },
  { service: "Benchmarking Study", price: "$1,200–2,500" },
  { service: "Pillar 2 Support", price: "Custom based on scope" },
  { service: "Corporate Tax Filing", price: "$299–799 per return" },
];

const included = [
  "Training and onboarding",
  "Quality control & supervision",
  "AI-assisted workflows",
  "Data confidentiality",
  "Reporting dashboard",
  "SLA-based delivery",
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero-bg text-primary-foreground py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-slide-up">
              Simple, Transparent, Scalable Pricing
            </h1>
            <p className="text-lg text-primary-foreground/80 animate-slide-up animation-delay-100">
              Choose the model that fits your business needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              Outsourcing Models
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              Flexible Pricing for Every Need
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 border ${
                  plan.popular ? "border-primary shadow-custom-xl" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="gradient-bg text-primary-foreground text-sm font-heading font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Depends on skill level, domain, and workload
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    className={`w-full font-heading font-semibold uppercase tracking-wide ${
                      plan.popular
                        ? "gradient-bg text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax & TP Pricing */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              Tax & Transfer Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              Specialized Tax Services Pricing
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-6 font-heading font-semibold text-foreground">
                        Service
                      </th>
                      <th className="text-right p-6 font-heading font-semibold text-foreground">
                        Price Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxPricing.map((item, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="p-6 text-foreground">{item.service}</td>
                        <td className="p-6 text-right">
                          <span className="font-heading font-semibold gradient-text">
                            {item.price}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                All Plans Include
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                Everything You Need for Success
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every engagement includes our standard service package to ensure smooth operations and optimal results.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground mb-6">
                We understand that every business is unique. Contact us for a tailored proposal that fits your specific requirements and budget.
              </p>
              <Link to="/contact">
                <Button className="w-full gradient-bg text-primary-foreground font-heading font-semibold uppercase tracking-wide group">
                  Request Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero-bg text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get a personalized proposal and discover how much you can save with MD Ibtida Global Services.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="font-heading font-semibold uppercase tracking-wide">
              Get Your Free Proposal
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
