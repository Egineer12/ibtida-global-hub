import { CheckCircle } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
              Your Trusted Partner for{" "}
              <span className="gradient-text">Intelligent Outsourcing</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              MD Ibtida Global Services (Pvt Ltd) is a next-generation outsourcing company helping businesses across the world streamline operations, improve efficiency, and scale rapidly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We combine human expertise with AI-powered workflows to deliver consistent, high-quality outcomes that drive real business value.
            </p>
            
            <div className="space-y-4">
              {[
                "Expert talent pool in Pakistan",
                "AI-enhanced operational efficiency",
                "Global delivery standards",
                "Cost-effective solutions",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/10 rounded-3xl" />
              <div className="relative bg-card rounded-2xl shadow-custom-xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "60%", label: "Cost Savings" },
                    { value: "24/7", label: "Operations" },
                    { value: "100+", label: "Clients Served" },
                    { value: "50+", label: "Experts" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-secondary">
                      <div className="text-3xl font-heading font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
