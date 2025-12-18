import {
  Monitor,
  Building2,
  Landmark,
  ShoppingCart,
  Home,
  HeartPulse,
  Rocket,
} from "lucide-react";

const industries = [
  { icon: Monitor, name: "Technology" },
  { icon: Building2, name: "Professional Services" },
  { icon: Landmark, name: "Financial Services" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Home, name: "Real Estate" },
  { icon: HeartPulse, name: "Healthcare Back-Office" },
  { icon: Rocket, name: "Startups & SMEs" },
];

const Industries = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Tailored Solutions for Every Sector
          </h2>
          <p className="text-muted-foreground">
            We understand the unique challenges of different industries and deliver customized outsourcing solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-card rounded-full px-6 py-4 border border-border hover:border-primary hover:shadow-custom-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <industry.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
