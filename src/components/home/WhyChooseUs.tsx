import { Cpu, Users, TrendingUp, DollarSign, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    title: "AI + Human Hybrid Model",
    description: "Automation enhances speed, accuracy, and cost efficiency while maintaining human oversight.",
  },
  {
    icon: Users,
    title: "High-Skill Talent in Pakistan",
    description: "English-proficient, trained, and globally competitive professionals ready to deliver.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Operations",
    description: "From startups to enterprise-level clients, we scale with your business needs.",
  },
  {
    icon: DollarSign,
    title: "Cost Savings Up to 60%",
    description: "Better quality at lower cost without compromising on service excellence.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "Secure infrastructure, confidentiality, NDAs, and GDPR-ready operations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            The MD Ibtida Advantage
          </h2>
          <p className="text-muted-foreground">
            We combine cutting-edge technology with expert talent to deliver exceptional results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-transparent transition-colors duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-colors duration-300">
                  <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
